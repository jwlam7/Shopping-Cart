const Product = require('../models/Product');

const getAllProducts = (req, res) => {
	res.json({ msg: 'get all products' });
};

module.exports = getAllProducts;
