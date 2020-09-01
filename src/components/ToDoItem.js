import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li className="todo-item">
        <div>{todo}</div>
        <div>
          <i className="far fa-edit"></i>
          <i className="far fa-trash-alt"></i>
        </div>
      </li>
    );
  }
}

export default TodoItem;
