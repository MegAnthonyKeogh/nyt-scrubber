import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/pages/Search";
import Saved from "../src/pages/Saved";

import Nav from "../src/components/Nav";
import NoMatch from "../src/pages/NoMatch";
import { Col, Row, Container } from "../src/components/Grid";
import Modal from "../src/components/modal";



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

