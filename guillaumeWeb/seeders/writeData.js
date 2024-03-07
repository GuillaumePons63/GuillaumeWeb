
const fs = require('fs');
const mysql = require('mysql');

// Lire le contenu du fichier JSON
const data = require('./data.json');

// Convertir le JSON en objet JavaScript
const data = JSON.parse(jsonData);

// Configurer la connexion à la base de données
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
});

// Établir la connexion à la base de données
connection.connect();

// Insérer les données dans la base de données
data.forEach(item => {
    connection.query('INSERT INTO ma_table SET ?', item, (error, results, fields) => {
        if (error) throw error;
        console.log('Données insérées avec succès!');
    });
});

// Fermer la connexion à la base de données
connection.end();