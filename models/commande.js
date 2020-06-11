const mongoose = require('mongoose');

const commandeSchema = mongoose.Schema({

  	numCommande : { type: String, required: true },
	listeProduits : { type: Array, required: true },
	dateCommande :  { type: Date, required: true },
	montant : { type: Number, required: false },
    userId: { type: String, required: true },
	livre: {default:false, type: Boolean },
	fournisseur :  { type: String, required: true }
});

module.exports = mongoose.model('Commande',  commandeSchema);