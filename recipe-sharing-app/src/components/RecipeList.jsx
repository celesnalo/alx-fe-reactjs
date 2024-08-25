import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const setIngredientsFilter = useRecipeStore((state) => state.setIngredientsFilter);
  const setCookingTimeFilter = useRecipeStore((state) => state.setCookingTimeFilter);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleIngredientsChange = (event) => {
    setIngredientsFilter(event.target.value);
  };

  const handleCookingTimeChange = (event) => {
    setCookingTimeFilter(Number(event.target.value));
  };

  return (
    <div className="recipe-list-container">
      <div className="filters">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search recipes..."
        />
        <input
          type="text"
          onChange={handleIngredientsChange}
          placeholder="Filter by ingredient..."
        />
        <input
          type="number"
          onChange={handleCookingTimeChange}
          placeholder="Max cooking time (minutes)"
        />
      </div>
      <div className="recipes">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
              <p>Cooking Time: {recipe.cookingTime} minutes</p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
