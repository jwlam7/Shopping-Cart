require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/Product');
const allProducts = require('./allProducts.json');

const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URI);
		await Product.deleteMany();
		await Product.create(allProducts);
		console.log('populated data');
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(0);
	}
};

start();
