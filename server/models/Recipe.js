const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  recipeId: {
    type: Int,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  imageType: {
    type: String
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
