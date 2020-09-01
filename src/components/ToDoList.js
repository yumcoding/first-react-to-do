import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete } = this.props;
    return (
      <div className="list-container">
        <ul className="todo-list">
          {items.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todo={item.todo}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
