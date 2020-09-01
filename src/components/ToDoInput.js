import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class TodoInput extends Component {
  state = {
    id: uuidv4(),
    todo: "",
  };

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, todo } = this.state;
    this.props.onCreate({ id, todo });
    this.setState({ id: uuidv4(), todo: "" });
  };

  render() {
    return (
      <div className="todo-input">
        <form onSubmit={this.handleSubmit}>
          <span>
            <i className="fas fa-plus"></i>
          </span>
          <input
            name="todo"
            placeholder="Add To Do"
            value={this.state.todo}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default TodoInput;
