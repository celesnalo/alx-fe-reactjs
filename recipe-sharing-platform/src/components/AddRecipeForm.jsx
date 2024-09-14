import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Preparation steps are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log({ title, ingredients, steps });

    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          id="ingredients"
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
        <textarea
          id="steps"
          rows="6"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
