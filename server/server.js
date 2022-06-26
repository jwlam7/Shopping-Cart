require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
//DB connection
const connectDB = require('./db/connect');
//Express Router
const productsRouter = require('./routes/products');
//Middlewares
const notFoundMiddleware = require('./middleware/notFound');

app.use(cors());

//routes
app.use('/api', productsRouter);

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3001;
const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URI);
		app.listen(PORT, () => {
			console.log(`server started on port: ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
