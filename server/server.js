require('dotenv').config();
const express = require('express');
const app = express();
//DB connection
const connectDB = require('./db/connect');

//routes
app.get('/api/', (req, res) => {
	res.json({ msg: 'hello world' });
});

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
