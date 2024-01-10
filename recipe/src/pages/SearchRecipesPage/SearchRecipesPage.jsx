import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchRecipesPage.css';

function SearchRecipesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [dietType, setDietType] = useState('any');
    const [cuisineType, setCuisineType] = useState('any');
    const [recipes, setRecipes] = useState([]); // State to hold search results
    const [isLoading, setIsLoading] = useState(false); 
    const cuisines = [
    'African',
    'Asian',
    'American',
    'British',
    'Cajun',
    'Caribbean',
    'Chinese',
    'Eastern European',
    'European',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'Southern',
    'Spanish',
    'Thai',
    'Vietnamese'];

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`http://localhost:5000/api/searchRecipes?query=${encodeURIComponent(searchQuery, cuisineType, dietType)}`);
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
            <div className="filter-options">
                <fieldset>
                    <legend>Select a diet type:</legend>
                    <div>
                        <input 
                            type="radio" 
                            id="any-diet" 
                            name="diet" 
                            value='any'
                            onChange={(e) => setDietType(e.target.value)}
                        />
                        <label for="any-diet">Any</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="gluten-free" 
                            name="diet" 
                            value="gluten-free" 
                            onChange={(e) => setDietType(e.target.value)}
                        />
                        <label for="gluten-free">Gluten Free</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="ketogenic" 
                            name="diet" 
                            value="ketogenic" 
                            onChange={(e) => setDietType(e.target.value)}
                        />
                        <label for="ketogenic">Ketogenic</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="vegetarian" 
                            name="diet" 
                            value="vegetarian" 
                            onChange={(e) => setDietType(e.target.value)}
                        />
                        <label for="vegetarian">Vegetarian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="vegan" 
                            name="diet" 
                            value="vegan" 
                            onChange={(e) => setDietType(e.target.value)}
                        />
                        <label for="vegan">Vegan</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="pescatarian" 
                            name="diet" 
                            value="pescatarian"
                            onChange={(e) => setDietType(e.target.value)} 
                        />
                        <label for="pescatarian">Pescatarian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="paleo" 
                            name="diet" 
                            value="paleo" 
                            onChange={(e) => setDietType(e.target.value)}
                        />
                        <label for="paleo">Paleo</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Select a cuisine type:</legend>
                    <div>
                        <input 
                            type="radio" 
                            id="any-cuisine" 
                            name="cuisine" 
                            value="any" 
                            onChange={(e) => setCuisineType(e.target.value)}
                        />
                        <label for="any-cuisine">Any</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="asian" 
                            name="cuisine" 
                            value="asian" 
                            onChange={(e) => setCuisineType(e.target.value)}
                        />
                        <label for="asian">Asian</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="american" 
                            name="cuisine" 
                            value="american"
                            onChange={(e) => setCuisineType(e.target.value)} 
                        />
                        <label for="american">American</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="european" 
                            name="cuisine" 
                            value="european" 
                            onChange={(e) => setCuisineType(e.target.value)}
                        />
                        <label for="european">European</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="jewish" 
                            name="cuisine" 
                            value="jewish"
                            onChange={(e) => setCuisineType(e.target.value)}
                        />
                        <label for="jewish">Jewish</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="latin-american" 
                            name="cuisine" 
                            value="latin-american" 
                            onChange={(e) => setCuisineType(e.target.value)}
                        />
                        <label for="latin-american">Latin American</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="mediterranean" 
                            name="cuisine" 
                            value="mediterranean" 
                            onChange={(e) => setCuisineType(e.target.value)}
                        />
                        <label for="mediterranean">Mediterranean</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="mexican" 
                            name="cuisine" 
                            value="mexican" 
                            onChange={(e) => setCuisineType(e.target.value)}
                        />
                        <label for="mexican">Mexican</label>
                    </div>
                </fieldset>
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
