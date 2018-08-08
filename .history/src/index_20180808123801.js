import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Grid extends Component {
  render() {
    return <div>Grid</div>;
  }
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      generation: 0
    };
  }
  render() {
    return (
      <div>
        <h1>The Game of Life</h1>
        <Grid />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
