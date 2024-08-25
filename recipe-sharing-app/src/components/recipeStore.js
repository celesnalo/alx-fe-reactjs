import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // delete a recipe by id
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),

  // set all recipes (if needed)
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
