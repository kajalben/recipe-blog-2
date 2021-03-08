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
  const [breakfast, setbreakfast] = useState();
  const [salad, setSalad] = useState();
  const [appetizer, setAppetizer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const categorys = ['breakfast', 'salad', 'appetizer'];
  
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () =>{
    setIsLoading(true);
    categorys.map( category  =>{
      fetchData(
        `https://recipe-blog-api.herokuapp.com/api/recipes/category/${category}`
      )
      .then( data => {
        setIsLoading(false);
        if(category === 'breakfast') setbreakfast(data)
        if(category === 'salad') setSalad(data)
        if(category === 'appetizer') setAppetizer(data)
      })
    })
  }


  const displayloader = () => {
    if (isLoading) return  <Loader />
    if (!breakfast || !salad || !appetizer) {
      return <span className="error-message">Sorry, Try Again! Something went wrong</span>;
    }
  };

  return (
    <div className="App">
      <Header />
      <Main>
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
      </Main>
      <Footer />
    </div>
  );
}

export default App;
