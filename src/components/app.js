var React = require("react");
var ReactDOM = require("react-dom");
var RecipeBox = require("./recipe-box/recipe-box.js");
var AddRecipe = require("./add-recipe/add-recipe.js");
var EditRecipe = require("./recipe-box/edit-recipe");

var Recipes = [
    {name: "spaghetti", ingredients: [ "noodles", "tomato sauce", "meatballs" ], order: "spaghetti0"},
    {name: "omelet", ingredients: [ "eggs", "cheese" ], order: "omelet1"}
];

//insert <EditRecipe /> to see the box for editing recipe

var FullRecipe = React.createClass({
    
    getInitialState: function() {
        return {
            addRecipeVisibility: false,
            editRecipeVisibility: false,
            value: "",
            valueIngredients: "",
            updater: ""
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
    
    generalUpdate: function() {
        this.setState({updater: ""});
    },
    
    render: function() {
        var genUpdate = this.generalUpdate;
        return (
            <div>
                {Recipes.map(function(item, key) {
                    return <RecipeBox recipe={Recipes} name={item.name} ingredients={item.ingredients} order={item.order} key={key} generalUpdate={genUpdate}  />;
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