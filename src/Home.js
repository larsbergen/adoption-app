
import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="searchBar">
            <h1>welcome to pet finder</h1>
                <h2>Search for a pet!</h2>
                <form className="searchInput">
                    <div className="search-group">
                        <label>Type of pet</label>
                        <select type="input" className="form-control" id="searchTerm" placeholder="Enter search term">
                        <option>Choose an animal type below</option>
                        <option>Dogs</option>
                        <option>Cats</option>
                        <option>Rabbits</option>
                        <option>Small & Furry</option>
                        <option>Scales, Fins, & Other</option>
                        <option>Birds</option>
                        <option>Horses</option>
                        <option>Barnyard</option>


                        </select>
                        <label>Zip Code</label>
                        <input type="input" className="form-control" id="zipSearch" placeholder="Zip Code"></input>
                        <button className="searchSubmit">Search</button>
                        
                    </div>
                </form>
            </div>
        );
    }
}


export default Home;