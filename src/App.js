import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stocks from './Stocks/Stocks';

class App extends Component {
  render() {
    return (
      <div data-testid="app-title" className="App">
        <Stocks />
      </div>
    );
  }
}

export default App;
