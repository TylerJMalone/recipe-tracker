import React, { useState } from 'react';
import { searchRecipes } from './RecipeService';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const data = await searchRecipes({ query });
      setRecipes(data.results);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            {/* Additional recipe details */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchComponent;