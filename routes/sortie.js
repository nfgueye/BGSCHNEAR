const express = require('express');
const app = express.Router();
const Sortie = require('../models/sortie');


app.post('/create', (req,res,next)=> {
    const sortie = new Sortie({...req.body});
        sortie.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));

})
app.delete('/liste/:id' , (req, res) => {
    Sortie.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})
app.put('/liste/:id' , (req, res,next ) => {
    Sortie.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste' , (req, res, next ) => {
    Sortie.find()
    .then(sorties => res.status(200).json(sorties))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste/:id' , (req, res, next ) => {
Sortie.findOne({ _id: req.params.id })
    .then(sortie => res.status(200).json(sortie))
    .catch(error => res.status(404).json({ error }));
})
module.exports = app;