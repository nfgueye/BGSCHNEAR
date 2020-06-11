const mongoose = require('mongoose');

const entreeSchema = mongoose.Schema({
	bondeLivraison  : { type: String, required: true },
	commande: { type: String, required: true },
	dateEntre:  { type: Date, required: true },
	listeProduits:{ type: Array, required: true },
	fournissseur :  { type: String, required: true },
	montant: { type: Number, required: false },
	user : { type: String, required: true }
});

module.exports = mongoose.model('Entree',  entreeSchema);