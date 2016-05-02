var React = require('react');
var ReactDOM = require('react-dom');

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
