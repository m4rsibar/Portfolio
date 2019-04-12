import React, { Component } from "react";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import MyWork from "./MyWork";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={MyWork} />
      </HashRouter>
    );
  }
}

export default App;
