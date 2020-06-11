const mongoose = require('mongoose');

const sortieSchema = mongoose.Schema({
    bonSortie : { type: String, required: true },
	listeProduits : { type: String, required: true },
	dateSortie :  { type: Date, required: true },
	montant : { type: Number, required: false },
    user: { type: String, required: true },
    destination : { type:String, require:true}
});

module.exports = mongoose.model('Sortie',  sortieSchema);