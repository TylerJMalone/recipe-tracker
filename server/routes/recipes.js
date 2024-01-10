const express = require('express');
const axios = require('axios');
const router = express.Router();

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY; 

router.get('/searchRecipes', async (req, res) => {
    try {
        const { query, cuisine, diet, ...otherParams } = req.query;
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}`;

        const response = await axios.get(apiUrl, {
            params: {
                query,
                cuisine,
                diet,
                ...otherParams
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/randomRecipes', async (req, res) => {
    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/random', {
            params: {
                apiKey: process.env.SPOONACULAR_API_KEY,
                number: 10 // Number of random recipes
            }
        });
        // Directly send the array if that's what the Spoonacular API returns
        res.json(response.data.recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/getRecipeDetails/:id', async (req, res) => {
    try {
        const recipeId = req.params.id;
        const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
            params: {
                apiKey: SPOONACULAR_API_KEY,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
