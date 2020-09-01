import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <span>
          <i className="fas fa-pencil-alt"></i>
        </span>
        <input
          type="text"
          placeholder="Enter ToDo"
          value={item}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default TodoInput;
