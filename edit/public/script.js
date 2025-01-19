var simplemde = new SimpleMDE({ element: document.getElementById("MyID") });

let fileActive = '';

fetch('/files')
                .then(response => response.json())
                .then(files => {
                    const fileList = document.getElementById('MyList');
                    files.forEach(file => {
                        const li = document.createElement('li');
                        li.textContent = file;
                        fileList.appendChild(li);
                        li.addEventListener('click', ()=> getFile(file));
                    });

                })
                .catch(error => console.error('Error fetching files:', error));

const getFile = (name) => {
    fetch(`/files/${name}`)
        .then(response => response.text())
        .then(data => {
            fileActive = name;
            simplemde.value(data);
        })
        .catch(error => console.error('Error fetching file:', error));
}

document.getElementById('Save').addEventListener('click', () => {
    if (fileActive == 'new') {
        const name = prompt('Please enter a file name');
        fileActive = name + '.md';           
           
    }


    fetch(`/files/${fileActive}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: simplemde.value() })
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
            location.reload();
        })
        .catch(error => console.error('Error saving file:', error));
});



document.getElementById('New').addEventListener('click', () => {
    fetch(`/new`)
        .then(response => response.text())
        .then(data => {
            fileActive = 'new';
            simplemde.value(data);
        })
        .catch(error => console.error('Error fetching file:', error));
});

