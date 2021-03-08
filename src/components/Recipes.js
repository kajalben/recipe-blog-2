import { useParams, useHistory } from "react-router-dom";

const Recipes = ({ breakfast, salad, appetizer }) => {
  const { category } = useParams();
  const history = useHistory();

  const haldleClick = (id, category) => {
    history.push(`${category}/${id}`);
  };

  const displayRecipes = (recipes) => {
    return recipes.map((recipe) => {
      return (
        <div className="recipe-grid-content" key={recipe.id}>
          <img
            className="recipe-grid-image"
            src={`${process.env.REACT_APP_SERVER}/images/${recipe.category}/${recipe.image}.jpg`}
            alt={recipe.name}
            onClick={(id, category) =>
              haldleClick(recipe.id, recipe.category)
            }
          />
          <p className="recipe-grid-name">{recipe.name}</p>
        </div>
      );
    });
  };
  return (
    <>
      <div className="recipe-grid-container">
        {category === "breakfast" && displayRecipes(breakfast)}
        {category === "salad" && displayRecipes(salad)}
        {category === "appetizer" && displayRecipes(appetizer)}
      </div>
    </>
  );
};

export default Recipes;
