import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <span>
          <i className="fas fa-tasks"></i>
        </span>
        <input
          type="text"
          placeholder="Enter ToDo"
          value={item}
          onChange={handleChange}
        />
        <button type="submit" disabled={item ? false : true}>
          {editItem ? "Edit" : "Register"}
        </button>
      </form>
    );
  }
}

export default TodoInput;
