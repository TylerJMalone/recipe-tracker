import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchRecipesPage.css';

function SearchRecipesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`http://localhost:5000/api/searchRecipes?query=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setRecipes(data.results);
        } catch (error) {
            console.error("Failed to fetch recipes:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="search-recipes-page">
            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search for recipes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" disabled={isLoading}>Search</button>
                </form>
            </div>
            <div className="search-results">
                {isLoading ? <p>Loading...</p> : 
                    recipes.map(recipe => (
                        <div key={recipe.id} className="recipe-item">
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image} alt={recipe.title} />
                            <Link to={`/recipe/${recipe.id}`}>View Details</Link> {/* Link to Recipe Details */}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SearchRecipesPage;
