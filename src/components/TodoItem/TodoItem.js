import React, { Component } from "react";
import "./todoitem.css";
class TodoItem extends Component {
  state = {
    editItem: "",
    editing: false,
  };

  handleEditToggle = () => {
    const { id, todo, handleEdit } = this.props;
    const { editItem, editing } = this.state;

    if (editing) {
      handleEdit({ id, todo: editItem });
    } else {
      this.setState({ id, editItem: todo });
    }
    this.setState({ editing: !this.state.editing });
  };

  handleChange = (e) => {
    this.setState({ editItem: e.target.value });
  };

  render() {
    const { editItem, editing } = this.state;
    const { id, todo, handleDelete } = this.props;

    return (
      <li className="todo-container">
        <div className="todo-item">
          {editing ? (
            <input
              classNmae="todo-input"
              type="text"
              value={editItem}
              onChange={this.handleChange}
            />
          ) : (
            <div className="todo-text">
              <span className="todo-checkbox">
                <i className="far fa-circle"></i>
              </span>
              <span className="todo-title">{todo}</span>
            </div>
          )}
        </div>
        <div className="todo-icons">
          <i
            onClick={this.handleEditToggle}
            className={editing ? "far fa-check-square" : "far fa-edit"}
          ></i>
          <i onClick={() => handleDelete(id)} className="far fa-trash-alt"></i>
        </div>
      </li>
    );
  }
}

export default TodoItem;
