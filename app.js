const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const commande = require( './routes/commande');
const produit = require ('./routes/produit');
const entree = require ('./routes/entree');
const facture = require ('./routes/facture');
const fournisseur = require ('./routes/fournisseur');
const sortie = require ('./routes/sortie');
const user = require ('./routes/user');
const service = require ('./routes/service');



//permet l'execution d'une requete ave une origine différence du serveur de réponse
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//permet de rendre le corp de la requete exploitable
app.use(bodyParser.json());
app.use('/commande', commande);
app.use('/produit', produit);
app.use('/entree', entree);
app.use('/facture', facture);
app.use('/fournisseur',fournisseur );
app.use('/service', service);
app.use('/sortie', sortie);
app.use('/user', user);

app.use((req, res, next) => {
    next(createError(404));
 });
 
 // error handler
 app.use(function (err, req, res, next) {
   console.error(err.message); // Log error message in our server's console
   if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
   res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
 });


module.exports = app;