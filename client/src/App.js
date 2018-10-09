import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/pages/Search";
import NoMatch from "../src/pages/NoMatch";
import Saved from "../src/pages/Saved";
import Nav from "../src/components/Nav";
import { Col, Row, Container } from "../src/components/Grid";



const App = () => (
    
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    
  </Router> 
      
);

export default App;

