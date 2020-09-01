import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, handleEdit, handleRemove, handleClear } = this.props;
    return (
      <div>
        <ul className="todo-list">
          {items.map((item) => (
            <TodoItem
              key={item.id}
              title={item.title}
              handleEdit={() => {
                handleEdit(item.id);
              }}
              handleRemove={() => {
                handleRemove(item.id);
              }}
            />
          ))}
        </ul>
        <button onClick={handleClear}>Clear List</button>
      </div>
    );
  }
}

export default TodoList;
