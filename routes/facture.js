const express = require('express');
const app = express.Router();
const Facture = require('../models/facture');


app.post('/create', (req,res,next)=> {
    const facture = new Facture({...req.body});
        facture.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));

})
app.delete('/liste/:id' , (req, res) => {
    Facture.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})
app.put('/liste/:id' , (req, res,next ) => {
    Facture.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste' , (req, res, next ) => {
    Facture.find()
    .then(factures => res.status(200).json(factures))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste/:id' , (req, res, next ) => {
Facture.findOne({ _id: req.params.id })
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(404).json({ error }));
})
module.exports = app;