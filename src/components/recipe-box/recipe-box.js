var React = require("react");
var jQuery = require("jquery");

/*
function() {
  //Activate by add recipe button in add-recipe box.
  
 // 1.creates a new object in the recipes array
  this.props.recipe.push()
  
 // 2.value of recipe input tag is inserted into the newly created object as the property of name with a value
 // of the input
  
 // 3. value of ingredients textarea tag is inserted into the created object as an array, with each
 // ingredient that's got a comma after it, becoming a new item in that ingredients array.
  
 // 4. Close the recipe box popup
}
*/



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
                  <div className="buttons">
                    <button className="edit btn"  onClick={this.props.openPopup} >Edit</button>
                    <button className="delete btn">Delete</button>
                  </div>
                </div>
            </div>
            );
    }
});

module.exports = RecipeBox;