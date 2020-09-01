import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="list-container">
        <ul className="todo-list">
          {items.map((item) => (
            <TodoItem key={item.id} todo={item.todo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
