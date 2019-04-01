import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  incrementCounter = () => {
    this.setState(({counter}) => ({counter: ++counter}))
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.incrementCounter}>Incrementa</button>
      </div>
    );
  }
}

export default App;
