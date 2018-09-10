import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Saved from '../src/components/Saved';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/savedpets" component={Saved} />
                {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
