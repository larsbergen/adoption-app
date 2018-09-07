import React, { Component } from 'react';
import './App.css';
import PetCard from './components/PetCard.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PetCard />
      </div>
    );
  }
}

export default App;
