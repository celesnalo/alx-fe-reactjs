import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full h-72 object-cover mb-4" />
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        {}
        <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
        {}
      </div>
    </div>
  );
};

export default RecipeDetail;
