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
            editRecipeVisibility: false,
            value: ""
        };
    },
    
    toggleVisibleAdd: function() {
        
        if(this.state.addRecipeVisibility) {
            this.setState({ addRecipeVisibility: false });
        }
        else {
            this.setState({ addRecipeVisibility: true });
        }
    },
    
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    
    render: function() {
        return (
            <div>
                <RecipeBox recipe={Recipes} openPopup={this.toggleVisibleEdit} />
                {this.state.addRecipeVisibility ? <AddRecipe closePopup={this.toggleVisibleAdd.bind(this)} handleChange={this.handleChange} /> : undefined}
                <button className="add-recipe btn" onClick={this.toggleVisibleAdd} >Add Recipe</button>
            </div>
        );
    }
});

ReactDOM.render(
  <FullRecipe />,
  document.querySelector(".render-target")
);