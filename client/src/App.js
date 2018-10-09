import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/pages/Search";
import NoMatch from "../src/pages/NoMatch";
import Saved from "../src/pages/Saved";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

