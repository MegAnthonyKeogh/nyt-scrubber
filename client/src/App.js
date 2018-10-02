import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/search";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/Search" component={Search} />
      </Switch>
    </div>
  </Router>
);

export default App;

