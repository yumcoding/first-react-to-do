import React, { Component } from "react";
import "./todofilter.css";
class TodoFilter extends Component {
  handleChange = (e) => {
    const { onCreate } = this.props;
    const text = e.target.value.toLowerCase();
    onCreate(text);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter-icon">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="filter-input"
          placeholder="Find To Do"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoFilter;
