import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Animations from './Components/Animations/Animations'
import Transitions from './Components/Transitions/Transitions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Animations></Animations>
        <Transitions></Transitions>
      </div>
    );
  }
}

export default App;
