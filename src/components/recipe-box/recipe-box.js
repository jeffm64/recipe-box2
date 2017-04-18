var React = require("react");
var jQuery = require("jquery");

//current bug: having the same recipe name results in it always deleting the first one in the list
//to fix you'll just need to add a key that has the recipe name plus a number, that number should increase
//for each recipe. That way having the same name will result in "egg1" and "egg2" for example.


var RecipeBox = React.createClass({
  
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
  
    NumberList: function() {
        var recipeItems = this.props.ingredients.map(function(ingredient) {
        return <li>{ingredient}</li>;
      });
        return (
          <ul>{recipeItems}</ul>
        );
      
    },
  
    render: function() {
        return (
            <div className="full-recipe">
                <div className="recipe"><a href="#">
                  <h2>{this.props.name}</h2>
                  </a>
                </div>
                <div className="ingredients">
                  <h3>Ingredients</h3>
                  {this.NumberList()}
                  <div className="buttons">
                    <button className="edit btn"  onClick={this.props.openPopup} >Edit</button>
                    <button className="delete btn" onClick={this.removeRecipe} >Delete</button>
                  </div>
                </div>
            </div>
            );
    }
});

module.exports = RecipeBox;