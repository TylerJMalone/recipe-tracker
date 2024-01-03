const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  ingredients: {

  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
