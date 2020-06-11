const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  	prenom : { type: String, required: true },
	nom : { type: String, required: true },
	dateNaissance : { type: Date, required: true },
	adresse : { type: String, required: false },
    telephone: { type: String, required: true },
	email: { type: String, required: true },
	profession : { type: String, required: false },
	photo : { type: String, required: false },
	username:{ type: String, required: true },
	password:{ default: 'ndeye', type: String, required: true },
});

module.exports = mongoose.model('User',  userSchema);