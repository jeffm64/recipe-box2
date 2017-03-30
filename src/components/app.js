var React = require("react");
var ReactDOM = require("react-dom");
var RecipeBox = require("./recipe-box/recipe-box.js");
var AddRecipe = require("./add-recipe/add-recipe.js");
var EditRecipe = require("./recipe-box/edit-recipe");

var Recipes = [
    {name: "spaghetti", ingredients: [ "noodles", "tomato sauce", "meatballs" ] }
];

//insert <AddRecipe /> to see the box for adding recipe, similar for editing recipe

var FullRecipe = React.createClass({
    
    getInitialState: function() {
        return {
            recipes: [],
            addRecipeVisibility: false,
            editRecipeVisibility: false
        };
    },
    
    render: function() {
        return (
            <div>
                <RecipeBox recipe={Recipes} />
                <button className="add-recipe btn">Add Recipe</button>
            </div>
        );
    }
});

ReactDOM.render(
  <FullRecipe />,
  document.querySelector(".render-target")
);