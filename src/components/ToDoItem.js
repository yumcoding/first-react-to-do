import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handleEdit, handleRemove } = this.props;
    return (
      <div className="todo-item">
        <h5>{title}</h5>
        <span onClick={handleEdit}>
          <i className="fas fa-pen" />
        </span>
        <span onClick={handleRemove}>
          <i className="fas fa-trash" />
        </span>
      </div>
    );
  }
}

export default TodoItem;
