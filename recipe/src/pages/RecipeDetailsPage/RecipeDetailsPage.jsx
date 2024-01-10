// RecipeDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetailsPage.css'; 

function RecipeDetailsPage() {
    const [recipeDetails, setRecipeDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/getRecipeDetails/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipeDetails(data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    if (!recipeDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="recipe-details"> {/* Apply the class name here */}
            <h1>{recipeDetails.title}</h1>
            <img src={recipeDetails.image} alt={recipeDetails.title} />
            <h2>Ingredients</h2>
            <ul>
                {recipeDetails.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.original}</li>
                ))}
            </ul>
            {/* Render other recipe details */}
        </div>
    );
}

export default RecipeDetailsPage;
