import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";

class TodoList extends Component {
  state = {
    filtering: false,
    filteredItems: [],
  };

  handleFilter = (text) => {
    if (text.length > 0) {
      this.setState({ filtering: true });
    } else {
      this.setState({ filtering: false });
    }
    const { items } = this.props;
    const newList = items.filter((item) => {
      const task = item.todo.toLowerCase();
      if (task.indexOf(text) !== -1) {
        return item;
      }
      return null;
    });
    console.log(this.state.filteredItems);
    this.setState({ filteredItems: newList });
  };

  render() {
    const { filtering, filteredItems } = this.state;
    const { items, handleEdit, handleDelete, handleClear } = this.props;

    return (
      <div className="list-container">
        <TodoFilter onCreate={this.handleFilter} />
        <ul className="todo-list">
          {filtering
            ? filteredItems.map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  todo={item.todo}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))
            : items.map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  todo={item.todo}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
        </ul>
        <button onClick={handleClear}>Clear List</button>
      </div>
    );
  }
}

export default TodoList;
