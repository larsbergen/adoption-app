
import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="searchBar">
            <h1 className='h1'>Welcome to Adopt-A-Pet</h1>
                <h2 className='h2'>Search for a pet!</h2>
                <form className="searchInput">
                    <div className="search-group">
                        <select type="input" className="form-control" id="searchTerm" placeholder="Choose search term">
                        <option>Animal Type</option>
                        <option>Dogs</option>
                        <option>Cats</option>
                        <option>Rabbits</option>
                        <option>Small & Furry</option>
                        <option>Scales, Fins, & Other</option>
                        <option>Birds</option>
                        <option>Horses</option>
                        <option>Barnyard</option>


                        </select>
                        <input type="input" className="form-control" id="zipSearch" placeholder="Zip Code"></input>
                        <div>
                        <button className="searchSubmit">Search</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        );
    }
}


export default Home;