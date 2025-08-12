// importData.js
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config({ path: __dirname + '/.env' });

// Load your product model (adjust path if needed)
const Product = require('./api/models/product'); // update path if your model file is elsewhere

// Read products.json
const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('MongoDB Connected');

    try {
        await Product.deleteMany(); // Clear existing data
        await Product.insertMany(products); // Insert new data
        console.log('Products Imported!');
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
});
