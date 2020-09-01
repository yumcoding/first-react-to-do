import React, { Component } from "react";

class TodoFilter extends Component {
  handleChange = (e) => {
    const { onCreate } = this.props;
    const text = e.target.value.toLowerCase();
    onCreate(text);
  };

  render() {
    return (
      <form>
        <label htmlFor="filter">Find Todo</label>
        <input
          type="text"
          className="filter"
          placeholder="Enter Todo"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default TodoFilter;
