import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PetCard from './components/PetCard'

// import Pets from "./pages/Pets";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pets" component={App} />
        <Route exact path="/savedpets" component={Saved} />
        {/* <Route exact path="/pets/:id" component={Detail} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
