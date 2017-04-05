var React = require("react");

/*
function() {
  //Activate by add recipe button in add-recipe box.
  
 // 1.creates a new object in the recipes array
  
  
 // 2.value of recipe input tag is inserted into the newly created object as the property of name with a value
 // of the input
  
 // 3. value of ingredients textarea tag is inserted into the created object as an array, with each
 // ingredient that's got a comma after it, becoming a new item in that ingredients array.
 this.props.recipe.push( { name: this.props.recipeName, ingredients: [] } );
  
 // 4. Close the recipe box popup
}
*/

var AddRecipe = React.createClass({
  
    recipeCreate: function() {
      var splitter = this.props.recipeIngredients.split(",");
      this.props.recipe.push( { name: this.props.recipeName, ingredients: splitter } );
      alert(this.props.recipe[1].ingredients);
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