var React = require("react");

var UserInput = React.createClass({
    render: function() {
        return (
        <div className="buttons">
            <button className="edit btn">Edit</button>
            <button className="delete btn">Delete</button>
        </div> 
          );
    }
});

module.exports = UserInput;