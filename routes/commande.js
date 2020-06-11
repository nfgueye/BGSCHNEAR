const express = require('express');
const app = express.Router();
const Commande = require('../models/commande');


app.post('/create', (req,res,next)=> {
    const commande = new Commande({...req.body});
        commande.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));

})
app.delete('/liste/:id' , (req, res ) => {
    Commande.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})
app.put('/liste/:id' , (req, res,next ) => {
    Commande.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste' , (req, res, next ) => {
    Commande.find()
    .then(commandes => res.status(200).json(commandes))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste/:id' , (req, res, next ) => {
Commande.findOne({ _id: req.params.id })
    .then(commande => res.status(200).json(commande))
    .catch(error => res.status(404).json({ error }));
})
module.exports = app;