var React = require("react");

var AddRecipe = React.createClass({
    render: function() {
        return (
            <div>
                <div className="overlay">
                </div>
            
                <div className="popup">
                  <h3 className="popup-title">Add a recipe</h3>
                  <div className="popup-recipe">
                    <h4>Recipe</h4>
                    <input />
                  </div>
                  <div className="popup-ingredients">
                    <h4>Ingredients</h4>
                    <textarea rows="3"></textarea>
                  </div>
                  <div className="popup-buttons">
                    <button className="add-edit">Add Recipe</button>
                    <button className="close">Close</button>
                  </div>
              </div>
          </div>
            )
    }
});

module.exports = AddRecipe;