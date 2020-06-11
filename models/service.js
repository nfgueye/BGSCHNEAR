const mongoose = require('mongoose');
const Produit = require('./produit');

const serviceSchema = mongoose.Schema({

    nom : { type: String, required: true },
    responsable : String, require : false,
    listeProduits : { type:Array, required: false }
	
});

module.exports = mongoose.model('Service',  serviceSchema);