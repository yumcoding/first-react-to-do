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

  handleEdit = ({ id, todo }) => {
    const { items } = this.state;
    this.setState({
      items: items.map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          return { id, todo };
        }
      }),
    });
  };

  handleDelete = (id) => {
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({ items: newItems });
  };

  handleClear = () => {
    this.setState({ items: [] });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <TodoInput onCreate={this.handleCreate} />
        <TodoList
          items={items}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
