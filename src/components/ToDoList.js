import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {};

  render() {
    const { items, handleDelete } = this.props;
    return (
      <div className="list-container">
        <ul className="todo-list">
          {items.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todo={item.todo}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
