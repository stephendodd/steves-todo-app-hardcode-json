var React = require('react');
var ReactDOM = require('react-dom');

var CompletedItemTableList = require('./CompletedItemTableList.jsx')
var TodoItemTableList= require('./TodoItemTableList.jsx')
var ItemInput = require('./ItemInput.jsx')


var TodoApp = React.createClass({

  handleUserInput: function(inputText) {
    this.setState({
      inputText:inputText
    });
  },

  addItem: function(item) {
    if (item.todoTask.trim() != "")
    {
      var items = this.state.items;
      item.id = (new Date()).getTime();
      //item.id = this.state.items.length + 1;
      item.completed = false;
      var newItems = items.concat([item]);
      this.setState({
        items:newItems,
        inputText:""
      });
    }
  },

  deleteRowItem: function(itemId) {

    var itemIndex = this.getItemIndex(itemId);
    this.state.items.splice(itemIndex,1);

    this.setState({
      items:this.state.items
    });
  },

  updateCompletedItems: function(itemId) {
    var itemIndex = this.getItemIndex(itemId);
    var completedItemIndex = -1;

    this.state.items[itemIndex].completed = !this.state.items[itemIndex].completed;
    if (this.state.items[itemIndex].completed === true) {
        this.state.completedItems.push(this.state.items[itemIndex]);
    } else {
      completedItemIndex = this.getCompletedItemIndex(this.state.items[itemIndex].id);
      this.state.completedItems.splice(completedItemIndex,1);
    }

    this.setState({
      completedItems: this.state.completedItems

    });
  },

  getItemIndex: function(itemId) {
    var index = this.state.items.map(function(item) {
      return item.id;
    }).indexOf(itemId);
    return index;
  },

  getCompletedItemIndex: function(itemId) {
    var index = this.state.completedItems.map(function(item) {
      return item.id;
    }).indexOf(itemId);
    return index;
  },

  getInitialState: function() {
    return {
      inputText: "",
      items: this.props.items,
      completedItems: []
    };
  },
  //Todo component comprises of an ItemInput and a TodoItemTableList component
  render: function() {
    return (
      <div>
        <ItemInput
          inputText={this.state.inputText}
          onUserInput={this.handleUserInput}
          onUserSubmit={this.addItem}
          items={this.state.items}
        />
        <TodoItemTableList
          items={this.state.items}
          deleteRowItem={this.deleteRowItem}
          updateCompletedItems={this.updateCompletedItems}
        />
        <CompletedItemTableList
          completedItems={this.state.completedItems}
        />
      </div>
    );
  }
});

module.exports = TodoApp
