var React = require("react");
var jQuery = require("jquery");

/*
Needs to take the input creates from add-recipe popup and rerender the recipes so as to include the newly
added one. In the main app, when rendering RecipeBox. THAT needs to use the .map method so as to create
multiple recipe boxes. EX: {this.state.list.map((item, key) => <Recipe name={item.name} key={key}/>)}
*/


var RecipeBox = React.createClass({
  
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
                <div className="recipe">
                  <h2><a href="#">{this.props.name}</a></h2>
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