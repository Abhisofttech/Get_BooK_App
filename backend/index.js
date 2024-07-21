const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bookrouter = require('./routes/book.route.js');
const userrouter = require('./routes/user.route.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;
const URI = process.env.MONGODB_URI;

// console.log("MongoDB URI:", URI); // Debug statement

app.use(cors()); // Apply CORS middleware
app.use(express.json());

mongoose.connect(URI)
  .then(() => console.log("Database Connected Successfully"))
  .catch(error => console.error("Database Connection Error:", error));

app.get('/', (req, res) => {
  res.send('Hello Abhishek');
});

app.use('/book', bookrouter); // Correct routing path
app.use('/user', userrouter); // Correct routing path

app.listen(PORT, () => {
  console.log('Your server started at Port:', PORT);
});
