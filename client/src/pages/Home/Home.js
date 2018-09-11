import React, { Component } from 'react';
import './Home.css'
import PetCard from '../PetCard';


class Home extends Component {
  render() {
    return (
      <div className="searchResults">
      <h2 className="resultHeader">Your Pets</h2>
        <div className="App">
          <PetCard />
        </div>
      </div>
    );
  }
}

export default Home;