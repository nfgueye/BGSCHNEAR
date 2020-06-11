const express = require('express');
const app = express.Router();
const Fournisseur = require('../models/fournisseur');


app.post('/create', (req,res,next)=> {
    const fournisseur = new Fournisseur({...req.body});
        fournisseur.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));

})
app.delete('/liste/:id' , (req, res) => {
    Fournisseur.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})
app.put('/liste/:id' , (req, res,next ) => {
    Fournisseur.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste' , (req, res, next ) => {
    Fournisseur.find()
    .then(fournisseurs => res.status(200).json(fournisseurs))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste/:id' , (req, res, next ) => {
Fournisseur.findOne({ _id: req.params.id })
    .then(fournisseur => res.status(200).json(fournisseur))
    .catch(error => res.status(404).json({ error }));
})
module.exports = app;