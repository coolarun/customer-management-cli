const mongoose = require('mongoose');

// customer schema
const customerSchema = mongoose.Schema({
	firstName: {type: String},
	lastName : {type: String},
	phone : {type: String},
	email : {type: String}
})

// define and export models
module.exports = mongoose.model('customerModel', customerSchema )