import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    constructor(props) {
    super(props);


    this.state = {
        currentlySelectedTab: 0,
    }
    this.navBarConfig=[{name: 'Home', link:'/'},{name: 'Search', link:'/search'},{name: 'Saved Pets', link:'/savedpets'}];
    }


    render() {
        return (
            <div className='navbar-container'>
                <div className="navbar-links">
                    {this.navBarConfig.map((navBarItem, index)=> {
                       return (
                       <div className="nav-link-holder"><Link to={navBarItem.link}><span onClick={()=>{this.navBarItem}} className={`anchor ${index === this.state.currentlySelectedTab ? 'selected-tab' : null}`}>{navBarItem.name}</span></Link></div>
                    );
                    })}
                </div>
            </div>
        );
    }
}
export default NavBar;