var React = require('react');
var ReactDOM = require('react-dom');

//Create TodoItemTableRow
//TodoItemTableRow is a row with id and todoTask columns

var CompletedItemRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          {this.props.item.todoTask}
        </td>
      </tr>
    );
  }
});

module.exports = CompletedItemRow
