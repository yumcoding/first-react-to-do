import React, { Component } from "react";
import TodoInput from "./components/TodoInput";

class App extends Component {
  state = {
    items: [],
  };

  handleCreate = ({ id, todo }) => {
    const { items } = this.state;
    const newItem = { id, todo };
    this.setState({ items: items.concat(newItem) });
  };

  render() {
    return (
      <div className="container">
        <TodoInput onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
