
// make a search to spoonacular food api
// example search:
// https://api.spoonacular.com/recipes/complexSearch?apiKey={YOUR-API-KEY}&query=pasta
export const queryRecipes = (query) => {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`);
};