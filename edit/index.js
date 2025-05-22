// filepath: /c:/Users/Utilisateur_1/Documents/programmation/Guillaumeweb/GuillaumeWeb/edit/app.js
const express = require('express');
const path = require('path');
const routes = require('./route');

const app = express();
const port = 3001;

// Configure Pug comme moteur de templates
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Définir un dossier statique
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Définir une route pour la page d'accueil
app.use('/', routes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});