require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipes');


const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/RecipeBook';
 

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error));

// Middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); 
app.use('/api', recipeRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
