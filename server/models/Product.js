const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
		maxlength: 100
	},
	name: {
		type: String,
		required: true,
		maxlength: 100
	},
	price: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	src: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: true
	},
	largeImage: {
		type: Boolean,
		required: true
	},
	spec: {}
});

module.exports = mongoose.model('Product', ProductSchema);
