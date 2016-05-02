// To get started with this tutorial running your own code, simply remove
// the script tag loading scripts/example.js and start writing code here.

//Create TodoItemTable
var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('./components/TodoApp.jsx')

//Create item input text box
//Function to handle the input boxes' text changing

//Create TodoAppComponent

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


/*var TODOS = [
    {"id": 1,"todoTask": "Take dog for a walk", "completed": false},
    {"id": 2,"todoTask": "Eat spam", "completed": false},
    {"id": 3,"todoTask": "Watch a film", "completed": false},
    {"id": 4,"todoTask": "Climb trees", "completed":false}
];*/

var TODOS = [];

ReactDOM.render(
  <TodoApp items={TODOS}/>,
  document.getElementById("todoListApp")
);
