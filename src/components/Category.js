import React from "react";
import RecipeDisplay from "./RecipeDisplay";

export default function Category({ breakfast, salad, appetizer }) {
  return (
    <div className="category-container">
      <div className="category-content">
        <h3>Breakfast Recipes</h3>
        <RecipeDisplay recipes={breakfast} />
      </div>
      <div className="category-content">
        <h3>Salad Recipes</h3>
        <RecipeDisplay recipes={salad} />
      </div>
      <div className="category-content">
        <h3>Appetizer Recipes</h3>
        <RecipeDisplay recipes={appetizer} />
      </div>
    </div>
  );
}
