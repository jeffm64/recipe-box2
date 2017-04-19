var React = require("react");

var RecipeBox = React.createClass({
  
    getInitialState: function() {
      return {
        isOpen: false
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
  
    NumberList: function() {
        var recipeItems = this.props.ingredients.map(function(ingredient) {
        return <li>{ingredient}</li>;
      });
        return (
          
          <div className="ingredients">
                  <h3>Ingredients</h3>
                  <ul>{recipeItems}</ul>
                  <div className="buttons">
                    <button className="edit btn"  onClick={this.props.openPopup} >Edit</button>
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
            </div>
            );
    }
});

module.exports = RecipeBox;