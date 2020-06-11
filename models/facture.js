const mongoose = require('mongoose');


const factureSchema = mongoose.Schema({
    nom : { type: String, required: true },
    responsable : String, require : false,
    listeProduits : { type:Array, required: false },
	montant :  { type:Number, required: false }
});

module.exports = mongoose.model('Facture',  factureSchema);