var React = require("react");
var ReactDOM = require("react-dom");
var RecipeBox = require("./recipe-box/recipe-box.js");
var AddRecipe = require("./add-recipe/add-recipe.js");
var EditRecipe = require("./recipe-box/edit-recipe");

var Recipes = [
    {name: "spaghetti", ingredients: [ "noodles", "tomato sauce", "meatballs" ] },
];

//insert <EditRecipe /> to see the box for editing recipe

var FullRecipe = React.createClass({
    
    getInitialState: function() {
        return {
            addRecipeVisibility: false,
            editRecipeVisibility: false,
            value: "",
            valueIngredients: ""
        };
    },
    
    toggleVisibleAdd: function() {
        
        if(this.state.addRecipeVisibility) {
            this.setState({ addRecipeVisibility: false, value: "", valueIngredients: "" });
        }
        else {
            this.setState({ addRecipeVisibility: true });
        }
    },
    
    handleChangeName: function(event) {
        this.setState({value: event.target.value});
    },
    
    handleChangeIngredients: function(event) {
        this.setState({valueIngredients: event.target.value});
    },
    
    render: function() {
        return (
            <div>
                {Recipes.map(function(item, key) {
                    return <RecipeBox recipe={Recipes} name={item.name} ingredients={item.ingredients} key={key} />;
                })}
                {this.state.addRecipeVisibility ? <AddRecipe closePopup={this.toggleVisibleAdd.bind(this)} recipeName={this.state.value} handleChangeName={this.handleChangeName} recipeIngredients={this.state.valueIngredients} handleChangeIngredients={this.handleChangeIngredients} recipe={Recipes} /> : undefined}
                <button className="add-recipe btn" onClick={this.toggleVisibleAdd} >Add Recipe</button>
            </div>
        );
    }
});

ReactDOM.render(
  <FullRecipe />,
  document.querySelector(".render-target")
);