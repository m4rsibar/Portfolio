import React, { Component } from "react";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import MyWork from "./MyWork";
import About from "./About";
import Music from "./Music";
import Scroll from "./Scroll";
import { TweenMax, TweenLite, Power2, TimelineLite } from "gsap";
import Form from "./Contact";

class App extends Component {
  music = null;
  tl = new TimelineLite({ paused: true });

  componentDidMount() {
    if (!sessionStorage.getItem("welcomePlayed")) {
      this.tl.to(this.music, 1, { opacity: 1 }, 4);
    } else {
      this.tl.to(this.music, 1, { opacity: 1 }, 1);
    }
    this.tl.play();
  }

  render() {
    return (
      <HashRouter>
        <Route
          path="/"
          render={() => <Music ref={div => (this.music = div)} />}
        />
        <Route path="/" render={() => <Scroll />} />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/work" component={MyWork} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Form} />
      </HashRouter>
    );
  }
}

export default App;
