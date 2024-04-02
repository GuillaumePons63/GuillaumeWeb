// Pour gérer le menu sur format mobile


const menuBouton = document.getElementById('menuMobil');
const nav = document.querySelector('.menuList')
const menu = document.querySelector('.menu');


menuBouton.addEventListener('click', () => {
    menu.classList.toggle('menuClick');
})

// Pour le slider des partenaire

const image = document.querySelector('#logoPartenaire');

const legende = document.querySelector('figcaption');
const images = [
    ['./logoPartenaire/ecoConseil.png', ' Eco-Conseil, centre de formation en ligne'],
    ['./logoPartenaire/guyLaliere.jpg', 'Le botaniste basé en Auvergne Guy Lalière'],
    ['./logoPartenaire/IFPA.png', 'Institut Pour la Promotion des Adultes, IFPA'],
    ['./logoPartenaire/logoallier.png', 'Chambre du commerce et de l\'industrie de l\'Allier'],
    ['./logoPartenaire/OAM.png', 'Association culturelle Option Art Media à Clermont-Ferrand']
]

document.addEventListener('DOMContentLoaded', () => {
    let imgN = 0;
    image.src = images[imgN][0];
    image.alt = images[imgN][1];
    legende.textContent = images[imgN][1];

    setInterval(() => {
        imgN++;
        image.classList.remove('enter');
        legende.classList.remove('zoomOut');
        setTimeout(() => {
            if (imgN > images.length - 1) {
                imgN = 0;
            }
            image.src = images[imgN][0];
            image.alt = images[imgN][1];
            legende.textContent = images[imgN][1];
            image.classList.add('enter')
            legende.classList.add('zoomOut');

        }, 100)




    },
        5000)

})