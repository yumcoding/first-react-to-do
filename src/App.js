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

  handleEdit = (id) => {
    const { items } = this.state;
    const oldItems = items.filter((item) => item.id !== id);
    const selectedItem = items.find((item) => item.id === id);
    this.setState({
      items: oldItems,
      id: id,
      item: selectedItem.title,
      editItem: true,
    });
  };

  handleRemove = (id) => {
    const { items } = this.state;
    const updatedItems = items.filter((item) => item.id !== id);
    this.setState({
      items: updatedItems,
    });
  };

  handleClear = () => {
    this.setState({ items: [] });
  };

  render() {
    const { item, editItem } = this.state;
    return (
      <div>
        <TodoInput
          item={item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={editItem}
        />
        <TodoList
          items={this.state.items}
          handleEdit={this.handleEdit}
          handleRemove={this.handleRemove}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
