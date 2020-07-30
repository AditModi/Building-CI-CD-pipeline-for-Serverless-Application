import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount = async () => {
    const response = await axios.get("/todo/list");
    this.setState({
      todos: response.data.todos
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.todos.map(todo => (
            <h2>{todo}</h2>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
