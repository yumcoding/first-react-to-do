import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, item, items } = this.state;
    const newTodo = {
      id,
      title: item,
    };
    const updatedItems = [...items, newTodo];
    this.setState({
      items: updatedItems,
      id: uuidv4(),
      item: "",
      editItem: false,
    });
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        <TodoInput
          item={item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
