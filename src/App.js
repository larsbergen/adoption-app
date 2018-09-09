import React, { Component } from 'react';
import './App.css';
import PetCard from './components/PetCard.js';


class App extends Component {
  render() {
    return (
      <div className="searchResults">
      <h2>Your Pet Options</h2>
        <div className="App">
          <PetCard />
        </div>
      </div>
    );
  }
}

export default App;
