import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Category from "./components/Category";
import RecipeDetail from "./components/RecipeDetail";
import Loader from "./components/Loader";
import { Route, Switch } from "react-router-dom";
import Recipes from "./components/Recipes";

import { fetchData } from "./api";

function App() {
  // const [recipes, setRecipes] = useState();
  const [breakfast, setbreakfast] = useState();
  const [salad, setSalad] = useState();
  const [appetizer, setAppetizer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    // fetchData("http://localhost:3030/api/recipes").then((data) => {
    //   setIsLoading(false);
    //   setRecipes(data);
    // });
    getBreakfast();
    getSalad();
    getAppetizer();
  }, []);

  const getBreakfast = () => {
    fetchData(
      `http://localhost:3030/api/recipes/category/breackfast`
    ).then((data) => setbreakfast(data));
  };

  const getSalad = () => {
    fetchData(`http://localhost:3030/api/recipes/category/salad`)
    .then((data) =>setSalad(data));
  };

  const getAppetizer = () => {
    fetchData(
      `http://localhost:3030/api/recipes/category/appetizer`
    ).then((data) => setAppetizer(data));
  };

  const displayloader = () => {
    // if (errors) {
    //   return <span className="error-message">{errors.map((error) => `Try Again ! ${error.message}`).join(",")}</span>;
    // }
    if (isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Header />
      {/* {recipes &&
        recipes.map((recipe) => {
          return (
            <img
              key={Math.random()}
              src={`${process.env.REACT_APP_DEV_SERVER}/images/${recipe.category}/${recipe.image}.jpg`}
              alt={recipe.name}
            />
          );
        })} */}
      {/* <Main>
        {displayloader()}
        {breakfast && salad && appetizer && (
          <Switch>
            <Route exact path="/">
              <Category
                breakfast={breakfast}
                salad={salad}
                appetizer={appetizer}
              />
            </Route>
            <Route  exact path="/:category">
              <Recipes
                breakfast={breakfast}
                salad={salad}
                appetizer={appetizer}
              />
            </Route>
            <Route path="/:category/:id">
              <RecipeDetail
                breakfast={breakfast}
                salad={salad}
                appetizer={appetizer}
              />
            </Route>
          </Switch>
        )}
      </Main> */}

      <Footer />
    </div>
  );
}

export default App;
