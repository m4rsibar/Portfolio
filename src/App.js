import React, { Component } from "react";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import MyWork from "./MyWork";
import Scroll from "./Scroll";
import About from "./About";
import Music from "./Music";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={MyWork} />
        <Route path="/about" component={About} />
      </HashRouter>
    );
  }
}

export default App;
