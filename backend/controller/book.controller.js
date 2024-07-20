const Books = require('../models/book.model.js');

const getBook = async (req, res) => {
  try {
    const books = await Books.find();
     res.status(200).json(books);
  } catch (error) {
    console.error(`Error fetching books: ${error.message}`);
    res.status(500).json({ 
      message: 'Internal Server Error', 
      error: error.message 
    });
  }
};

module.exports = { getBook };
