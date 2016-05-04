var React = require('react');
var ReactDOM = require('react-dom');

//Create TodoItemTableRow
//TodoItemTableRow is a row with id and todoTask columns

var TodoItemTableRow = React.createClass({

  deleteRowItem: function() {
    this.props.deleteRowItem(this.props.item.id);
  },

  onChange: function() {
    this.props.updateCompletedItems(this.props.item.id);
  },

  render: function() {
    return (
      <tr>
        <td>
          {this.props.i}
        </td>
        <td>
          {this.props.item.todoTask}
        </td>
        <td>
          <input type="checkbox" checked={this.props.item.completed} onChange={this.onChange}/>
        </td>
        <td>
          <input type="button" className="removeBtn" value="Remove" onClick={this.deleteRowItem}/>
        </td>
      </tr>
    );
  }
});

module.exports = TodoItemTableRow
