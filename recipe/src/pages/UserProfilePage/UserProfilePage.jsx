import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserProfilePage() {
  
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        
    }, []);

    const createRecipeCard = async (recipeId) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/card?apiKey=cfc8783e7b444135bbf2fca55e9a4e18`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Handle the generated recipe card URL (data.url)
        } catch (error) {
            console.error('Error creating recipe card:', error);
        }
    };

    return (
        <div>
            <h1>User Profile</h1>
            <h2>Saved Recipes</h2>
            <div>
                {savedRecipes.map((recipe, index) => (
                    <div key={index}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} />
                        <button onClick={() => createRecipeCard(recipe.id)}>Create Recipe Card</button>
                    </div>
                ))}
            </div>
            <Link to="/create-recipe">Create New Recipe</Link> {/* Link to create recipe page */}
        </div>
    );
}

export default UserProfilePage;
