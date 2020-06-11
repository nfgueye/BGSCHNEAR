const express = require('express');
const app = express.Router();
const Service = require('../models/service');


app.post('/create', (req,res,next)=> {
    const service = new Service({...req.body});
        service.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));

})
app.delete('/liste/:id' , (req, res) => {
    Service.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
})
app.put('/liste/:id' , (req, res,next ) => {
    Service.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste' , (req, res, next ) => {
    Service.find()
    .then(services => res.status(200).json(services))
    .catch(error => res.status(400).json({ error }));
})
app.get('/liste/:id' , (req, res, next ) => {
Service.findOne({ _id: req.params.id })
    .then(service => res.status(200).json(service))
    .catch(error => res.status(404).json({ error }));
})
module.exports = app;