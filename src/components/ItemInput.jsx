var React = require('react');
var ReactDOM = require('react-dom');

//Create TodoItemTableRow
//TodoItemTableRow is a row with id and todoTask columns

var ItemInput = React.createClass({
  handleInputChange: function() {
    this.props.onUserInput(
      this.refs.inputText.value
    );
  },
  //Function to handle the form being submitted
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onUserSubmit(

      {todoTask: this.refs.inputText.value}
    )
  },
  //Method to render the input form
  render: function() {
    return (
      <form className="itemInputForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add item here..."
          value={this.props.inputText}
          ref="inputText"
          onChange={this.handleInputChange}
        />
        <input type="submit" value="Add item" />
      </form>
    );
  }
});

module.exports = ItemInput
