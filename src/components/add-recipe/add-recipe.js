var React = require("react");


var AddRecipe = React.createClass({
  
    recipeCreate: function() {
      var splitter = this.props.recipeIngredients.split(",");
      this.props.recipe.push( { name: this.props.recipeName, ingredients: splitter, order: (this.props.recipeName + this.props.recipe.length) } );
      this.props.closePopup();
    },
  
    render: function() {
        return (
            <div>
                <div className="overlay"  onClick={this.props.closePopup} >
                </div>
            
                <div className="popup">
                  <h3 className="popup-title">Add a recipe</h3>
                  <div className="popup-recipe">
                    <h4>Recipe</h4>
                    <input type="text" placeholder="Recipe name" value={this.props.recipeName} onChange={this.props.handleChangeName} />
                  </div>
                  <div className="popup-ingredients">
                    <h4>Ingredients</h4>
                    <textarea type="text" rows="3" placeholder="Enter ingredients, seperated by a comma"  value={this.props.recipeIngredients} onChange={this.props.handleChangeIngredients} ></textarea>
                  </div>
                  <div className="popup-buttons">
                    <button className="add-edit"  onClick={this.recipeCreate} >Add Recipe</button>
                    <button className="close" onClick={this.props.closePopup} >Close</button>
                  </div>
              </div>
          </div>
            )
    }
});

module.exports = AddRecipe;