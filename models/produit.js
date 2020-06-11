const mongoose = require('mongoose');

const produitSchema = mongoose.Schema({
    codeProduit: { type: String, required: true },
    designation: { type: String, required: true },
    dateDePeremption: { type: Date, required: false },
    zoneDerangement: { type: String, required: false },
    référence: { type: String, required: false },
    catégorie: { type: String, required: false },
    acronyme: { type: String, required: false },
    conditionnement: { type: String, required: true },
    quantité: { type: Number, required: true },
    prixUnitaire: { type: Number, required: true },

});

module.exports = mongoose.model('Produit', produitSchema);