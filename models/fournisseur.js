const mongoose = require('mongoose');

const fournisseurSchema = mongoose.Schema({

    nomFournisseur: { type: String, required: true },
    adresse: { type: String, required: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Fournisseur', fournisseurSchema);