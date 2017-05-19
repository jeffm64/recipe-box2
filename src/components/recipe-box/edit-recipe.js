var React = require("react");

var EditRecipe = React.createClass({
  
    editConfirm: function() {
      for(var i=0; i<this.props.recipe.length; i++) {
        if(this.props.order === this.props.recipe[i].order) {
          //changes the original recipe in the recipe object to what is written in the input for the name,
          //and the textarea for the recipe. Needs to also create a new order
        }
      }
    },
  
    ingredientsList: function() {
          var ingredients = this.props.recipe[0].ingredients.map(function(ingredient) {
            return " " + ingredient;
          });
          return ingredients;
        },
  
    render: function() {
        return (
            <div>
                <div className="overlay" onClick={this.props.closePopupEdit} >
                </div>
            
                <div className="popup">
                  <h3 className="popup-title">Edit a recipe</h3>
                  <div className="popup-recipe">
                    <h4>Recipe</h4>
                    <input defaultValue={this.props.name} />
                  </div>
                  <div className="popup-ingredients">
                    <h4>Ingredients</h4>
                    <textarea rows="3" defaultValue={this.props.ingredients}  ></textarea>
                  </div>
                  <div className="popup-buttons">
                    <button className="add-edit" onClick={this.editConfirm} >Edit Recipe</button>
                    <button className="close" onClick={this.props.closePopupEdit} >Close</button>
                  </div>
              </div>
          </div>
            )
    }
});

module.exports = EditRecipe;