const express = require('express');
const app = express.Router();
const Entree = require('../models/entree');


app.post('/create', (req,res,next)=> {
    const entree = new Entree({...req.body});
        entree.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));

})
app.delete('/liste/:id' , (req, res ) => {
    Entree.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})
app.put('/liste/:id' , (req, res,next ) => {
    Entree.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste' , (req, res, next ) => {
    Entree.find()
    .then(entrees => res.status(200).json(entrees))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste/:id' , (req, res, next ) => {
Entree.findOne({ _id: req.params.id })
    .then(entree => res.status(200).json(entree))
    .catch(error => res.status(404).json({ error }));
}) 
 
module.exports = app;