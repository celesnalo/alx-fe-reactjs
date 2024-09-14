import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Recipe Sharing Platform</h1>
      <Link to="/add-recipe" className="text-blue-500 underline mb-4">Add New Recipe</Link>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
            <Link key={item.id} to={`/recipe/${item.id}`}>
                <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
                    <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full h-36 object-cover" />
                    <h2 className="text-2xl font-semibold mt-2">{recipe.title}</h2>
                    <p className="text-gray-600">{recipe.summary}</p>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
