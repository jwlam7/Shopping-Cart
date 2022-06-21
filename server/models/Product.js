const mongoose = require('mongoose');

const SpecSchema = new mongoose.Schema({
	material: String,
	dimensions: String,
	weight: String,
	battery_life: String,
	mode: String,
	head_attachments: String,
	weight_capacity: String,
	quantity: String,
	usage: String,
	water_resistant: String
});

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
	specs: SpecSchema
});

module.exports = mongoose.model('Product', ProductSchema);
