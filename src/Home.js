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
                        <option >Animal Type</option>
                        <option value="dog">Dogs</option>
                        <option value="cat">Cats</option>
                        <option value="smallfurry">Small & Furry</option>
                        <option value="reptile">Scales, Fins, & Other</option>
                        <option value="bird">Birds</option>
                        <option value="horse">Horses</option>
                        <option value="barnyard">Barnyard</option>
                        

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