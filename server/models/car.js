const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let CarSchema = new mongoose.Schema({
	year: {type: String, required:true},
	make: {type:String, required: true},
	model: {type: String, required: true},
	image: {type:String}
}, {timestamps:true});

mongoose.model('Car', CarSchema);
