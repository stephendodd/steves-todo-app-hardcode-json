var React = require('react');
var ReactDOM = require('react-dom');

var CompletedItemRow = require('./CompletedItemRow.jsx')
//Create TodoItemTableRow
//TodoItemTableRow is a row with id and todoTask columns

var CompletedItemTableList = React.createClass({

  render: function() {

    var completedItemRows=[];

    completedItemRows = this.props.completedItems.map(function(item, i) {
      return <CompletedItemRow item={item} key={i}/>;
    }.bind(this));

    return (
      <div>
      <h3>Completed items</h3>

      <table>
        <thead>
          <tr>
            <th>Todo task</th>
          </tr>
        </thead>
        <tbody>
          {completedItemRows}
        </tbody>
      </table>

      </div>
    );
  }
});

module.exports = CompletedItemTableList
