import React from "react";
import { useParams } from "react-router-dom";
import marked from "marked";

const RecipeDetail = ({ breakfast, salad, appetizer }) => {
  const { category, id } = useParams();

  const filterRecipe = (recipes) => {
    return recipes
      .filter((recipe) => recipe.id == id)
      .map((recipe) => {
        return (
          <div key={recipe.id} className="recipe-container">
            <img
              className="recipe-image"
              src={`${process.env.REACT_APP_SERVER}/images/${recipe.category}/${recipe.image}.jpg`}
              alt={recipe.name}
            />
            <div className="recipe-name">
              <h3>{recipe.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: recipe.direction }}></p>
            </div>

            <div className="recipe-content recipe-ingredients">
              <h3>Ingredients</h3>
              <p dangerouslySetInnerHTML={{ __html: recipe.items }}></p>
            </div>
            <div className="recipe-content recipe-direction">
              <h3>Directions</h3>
              <p
                dangerouslySetInnerHTML={{ __html: recipe.description }}
              ></p>
            </div>
          </div>
        );
      });
  };

  return (
    <>
    
      {category == "breakfast" && filterRecipe(breakfast)}
      {category == "salad" && filterRecipe(salad)}
      {category == "appetizer" && filterRecipe(appetizer)}
    </>
  );
};

export default RecipeDetail;
