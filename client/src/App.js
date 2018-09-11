import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home';
import Saved from './Pages/Saved/Saved';

// import Pets from "./pages/Pets";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default App;
