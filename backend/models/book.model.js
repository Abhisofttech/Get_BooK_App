const mongoose = require('mongoose');

// Define the schema
const bookSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, default: 'General' },
    image: { type: String, default: '' },
    title: { type: String, default: '' }
});

// Create the model
const Books = mongoose.model('BookList', bookSchema);

// Export the model
module.exports = Books;
