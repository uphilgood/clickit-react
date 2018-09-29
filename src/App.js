import React, { Component } from 'react';
import './App.css';
import CardsList from './components/CardsList';
import Jumbotron from './components/Jumbotron'


class App extends Component {

  

  render() {
    return (
      <div className="App">
      <Jumbotron />
      <CardsList />
      </div>
    );
  }
}

export default App;
