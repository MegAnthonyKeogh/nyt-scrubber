import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/search";


class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </Router>
);
    
  }
}

export default App;
