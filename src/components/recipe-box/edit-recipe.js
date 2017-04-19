var React = require("react");

var EditRecipe = React.createClass({
  
    ingredientsList: function() {
          var ingredients = this.props.recipe[0].ingredients.map(function(ingredient) {
            return " " + ingredient;
          });
          return ingredients;
        },
  
    render: function() {
        return (
            <div>
                <div className="overlay">
                </div>
            
                <div className="popup">
                  <h3 className="popup-title">Edit a recipe</h3>
                  <div className="popup-recipe">
                    <h4>Recipe</h4>
                    <input defaultValue="Hello" />
                  </div>
                  <div className="popup-ingredients">
                    <h4>Ingredients</h4>
                    <textarea rows="3" defaultValue="goodbye"  ></textarea>
                  </div>
                  <div className="popup-buttons">
                    <button className="add-edit">Edit Recipe</button>
                    <button className="close" onClick={this.props.closePopupEdit} >Close</button>
                  </div>
              </div>
          </div>
            )
    }
});

module.exports = EditRecipe;