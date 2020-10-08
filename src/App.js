import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
