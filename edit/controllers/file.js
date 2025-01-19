const fs = require('fs');
const path = require('path');

const folder = './../../GuillaumeWeb/guillaumeWeb/content/projet'

module.exports.listFiles = (req, res) => {
    fs.readdir(path.join(folder), (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la lecture du dossier');
            return;
        }
        res.send(files);
    });
}

module.exports.getFile = (req, res) => {
    const name = req.params.name;
    fs.readFile(path.join(folder, name), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.send(data);
    }
    );
}

module.exports.saveFile = (req, res) => {
    const name = req.params.name;
    const content = req.body.content;
    fs.writeFile(path.join(folder, name), content, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de l\'écriture du fichier');
            return;
        }
        res.send('Fichier enregistré');
    });
}

module.exports.setNewFile = (req, res) => {
    const name = 'template.md';
    fs.readFile(path.join(folder,'/../', name), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.send(data);
    }
    );}