import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
  };

  handleCreate = ({ id, todo }) => {
    const { items } = this.state;
    const newItem = { id, todo };
    this.setState({ items: items.concat(newItem) });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <TodoInput onCreate={this.handleCreate} />
        <TodoList items={items} />
      </div>
    );
  }
}

export default App;
