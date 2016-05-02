var React = require('react');
var ReactDOM = require('react-dom');

var TodoItemTableRow = require('./TodoItemTableRow.jsx')

var TodoItemTableList = React.createClass({

  deleteRowItem: function(itemId) {
    this.props.deleteRowItem(itemId);
  },

  render: function() {
    var rows = [];
    //loop through each item and create a TodoItemTableRow component with each item.

    rows =this.props.items.map(function(item, i){
      return <TodoItemTableRow item={item} i={i} key={i} deleteRowItem={this.deleteRowItem} updateCompletedItems={this.props.updateCompletedItems}/>;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Item No</th>
            <th>Todo task</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

module.exports = TodoItemTableList
