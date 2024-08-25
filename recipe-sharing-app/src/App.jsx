import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'; // Fixed typo in file name
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          
          <Route path="/" exact>
            <AddRecipeForm />
            <RecipeList />
          </Route>
          
          <Route path="/recipe/:id" exact>
            <RecipeDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
