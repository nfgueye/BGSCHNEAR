const express = require('express');
const app = express.Router();
const Produit = require('../models/produit');


app.post('/create', (req,res,next)=> {
    const produit = new Produit({...req.body});
        produit.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));

})
app.delete('/liste/:id' , (req, res) => {
    Produit.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})
app.put('/liste/:id' , (req, res,next ) => {
    Produit.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste' , (req, res, next ) => {
    Produit.find()
    .then(produits => res.status(200).json(produits))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste/:id' , (req, res, next ) => {
Produit.findOne({ _id: req.params.id })
    .then(produit => res.status(200).json(produit))
    .catch(error => res.status(404).json({ error }));
})
module.exports = app;