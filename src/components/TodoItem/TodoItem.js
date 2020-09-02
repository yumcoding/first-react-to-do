import React, { Component } from "react";
import "./todoitem.css";
class TodoItem extends Component {
  state = {
    editItem: "",
    editing: false,
    checking: false,
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

  handleCheckToggle = () => {
    this.setState({ checking: !this.state.checking });
  };

  render() {
    const { editItem, editing, checking } = this.state;
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
                <i
                  onClick={this.handleCheckToggle}
                  className={checking ? "fas fa-check-circle" : "far fa-circle"}
                ></i>
              </span>
              <span className="todo-title">{todo}</span>
            </div>
          )}
        </div>
        <div className="todo-icons">
          <i
            onClick={this.handleEditToggle}
            className={editing ? "fas fa-edit" : "far fa-edit"}
          ></i>
          <i onClick={() => handleDelete(id)} className="far fa-trash-alt"></i>
        </div>
      </li>
    );
  }
}

export default TodoItem;
