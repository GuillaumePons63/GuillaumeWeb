const express = require('express');
const path = require('path');
const fs = require('fs');
const home = require('./controllers/home'); 
const file = require('./controllers/file');

const router = express.Router();

// Définir une route pour la page d'accueil;
router.get('/', home.index);

// Définir une route pour obtenir la liste des fichiers
router.get('/files', file.listFiles);

router.get('/files/:name', file.getFile);

router.post('/files/:name', express.json(), file.saveFile);

router.get('/new',file.setNewFile)

module.exports = router;