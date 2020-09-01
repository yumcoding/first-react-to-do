import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { id, todo, handleDelete } = this.props;
    return (
      <li className="todo-item">
        <div>{todo}</div>
        <div>
          <i className="far fa-edit"></i>
          <i
            onClick={() => {
              handleDelete(id);
            }}
            className="far fa-trash-alt"
          ></i>
        </div>
      </li>
    );
  }
}

export default TodoItem;
