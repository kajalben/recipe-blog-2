import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { useHistory } from "react-router-dom";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    title: {
      color: theme.palette.primary.dark,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
  },
}));

const RecipeDisplay = (props) => {
  const history = useHistory();

  const haldleClick = (id, category) => {
    history.push(`${category}/${id}`);
  };


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cols={
          isWidthUp("md", props.width)
            ? 4
            : isWidthUp("sm", props.width)
            ? 3
            : 2
        }
      >
        {props.recipes.map((recipe) => (
          <GridListTile style={{ cursor: "pointer" }} key={recipe.id}>
            <img
              src={`${process.env.REACT_APP_DEV_SERVER}/images/${recipe.category}/${recipe.image}.jpg`}
              alt={recipe.name}
              onClick={(id, category) =>
                haldleClick(recipe.id, recipe.category)
              }
            />
            <GridListTileBar
              title={recipe.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              onClick={haldleClick}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withWidth()(RecipeDisplay);
