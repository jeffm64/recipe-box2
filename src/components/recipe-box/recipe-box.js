var React = require("react");
var jQuery = require("jquery");
var UserInput = require("./user-input");


var RecipeBox = React.createClass({
  
    NumberList: function() {
      var recipeItems = this.props.recipe[0].ingredients.map(function(ingredient) {
        return <li>{ingredient}</li>;
      });
        return (
          <ul>{recipeItems}</ul>
        );
    },
  
    render: function() {
        return (
            <div className="full-recipe">
                <div className="recipe">
                  <h2><a href="#">{this.props.recipe[0].name}</a></h2>
                </div>
                <div className="ingredients">
                  <h3>Ingredients</h3>
                  {this.NumberList()}
                  <UserInput />
                </div>
            </div>
            );
    }
});

module.exports = RecipeBox;