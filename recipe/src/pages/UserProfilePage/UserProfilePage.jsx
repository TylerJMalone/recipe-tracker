import React, { useState, useEffect } from 'react';
import CreateRecipeForm from '../../components/CreateRecipeForm/CreateRecipeForm';
import { jwtDecode } from 'jwt-decode';
import './UserProfilePage.css'; // Ensure this points to your actual UserProfilePage.css file

function UserProfilePage() {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const fetchSavedRecipes = async () => {
            const token = localStorage.getItem('userToken');
            if (token) {
                const decoded = jwtDecode(token);
                const userId = decoded.userId;

                try {
                    const response = await fetch(`http://localhost:5000/api/getUserRecipes/${userId}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const recipes = await response.json();
                    setSavedRecipes(recipes);
                } catch (error) {
                    console.error('Error fetching recipes:', error);
                }
            }
        };

        fetchSavedRecipes();
    }, []);

    const handleSaveRecipe = async (recipeData) => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            console.log('No token found');
            return;
        }

        const decoded = jwtDecode(token);
        const userId = decoded.userId;
        const dataToSend = {
            ...recipeData,
            ingredients: recipeData.ingredients.split('\n'),
            instructions: recipeData.instructions.split('\n'),
        };

        try {
            const response = await fetch('http://localhost:5000/api/createRecipe', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, ...dataToSend })
            });

            if (!response.ok) {
                throw new Error('Failed to save recipe');
            }

            const newRecipe = await response.json();
            setSavedRecipes([newRecipe, ...savedRecipes]); // Add the new recipe to the start of the list
        } catch (error) {
            console.error('Error saving recipe:', error);
        }
    };

    const RecipeCard = ({ recipe }) => {
        return (
            <div className="recipe-card">
                <h3>{recipe.title}</h3>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Instructions:</strong> {recipe.instructions}</p>
                <p><strong>Prep time:</strong> {recipe.readyInMinutes} minutes</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
            </div>
        );
    };

    return (
        <div className="user-profile-page">
            <h1>User Profile</h1>
            <CreateRecipeForm onSave={handleSaveRecipe} />
            <h2>Saved Recipes</h2>
            <div>
                {savedRecipes.map((recipe, index) => (
                    <RecipeCard key={recipe._id || index} recipe={recipe} /> // Use recipe._id as key if available for better performance
                )).reverse()} {/* Reverse the array for display */}
            </div>
        </div>
    );
}

export default UserProfilePage;
