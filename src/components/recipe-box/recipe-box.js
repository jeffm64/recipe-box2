var React = require("react");
var EditRecipe = require("./edit-recipe");

var RecipeBox = React.createClass({
  
    getInitialState: function() {
      return {
        isOpen: false,
        editRecipeVisibility: false,
        valueEdit: "",
        valueIngredientsEdit: "",
        recipeOrderName: this.props.order
        
      };
    },
    
    handleClick: function() {
      if(this.state.isOpen) {
            this.setState({ isOpen: false });
        }
        else {
            this.setState({ isOpen : true });
        }
    },
  
    removeRecipe: function() {

      var count = 0;
      var propRecipe = this.props.recipe;
      var propOrder = this.props.order; 
      
      this.props.recipe.map(function (recipe) {
        if (recipe.order === propOrder ) {
          propRecipe.splice(count, 1);
        } else {
          count ++;
        }
      });
      this.props.generalUpdate();
      
    },
    
    toggleVisibleEdit: function() {
    
      if(this.state.editRecipeVisibility) {
          this.setState({ editRecipeVisibility: false, valueEdit: "", valueIngredientsEdit: "" });
      }
      else {
          this.setState({ editRecipeVisibility: true });
          alert(this.state.recipeOrderName);
      }
    },
  
    NumberList: function() {
        var recipeItems = this.props.ingredients.map(function(ingredient) {
        return <li>{ingredient}</li>;
      });
        return (
          
          <div className="ingredients">
                  <h3>Ingredients</h3>
                  <ul>{recipeItems}</ul>
                  <div className="buttons">
                    <button className="edit btn"  onClick={this.toggleVisibleEdit} >Edit</button>
                    <button className="delete btn" onClick={this.removeRecipe} >Delete</button>
                  </div>
                </div>
        );
        
      
    },
  
    render: function() {
        return (
            <div className="full-recipe">
                <div className="recipe">
                  <a href="#" onClick={this.handleClick} >
                    <h2>{this.props.name}</h2>
                  </a>
                </div>
                {this.state.isOpen ? this.NumberList() : undefined}
                {this.state.editRecipeVisibility ? <EditRecipe closePopupEdit={this.toggleVisibleEdit.bind(this)} recipe={this.props.recipe} name={this.props.name} ingredients={this.props.ingredients} order={this.props.order}  /> : undefined}
            </div>
            );
    }
});

module.exports = RecipeBox;