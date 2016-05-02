var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('./components/TodoApp.jsx')

//Create TodoAppComponent

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
