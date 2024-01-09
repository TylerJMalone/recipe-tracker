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

module.exports = router;
