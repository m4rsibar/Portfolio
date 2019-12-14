import React, { Component } from "react";
import "./App.scss";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import MyWork from "./MyWork";
import About from "./About";
import Music from "./Music";
import Scroll from "./Scroll";
import Soon from "./Soon";
import { TimelineLite } from "gsap";

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
          render={() => (
            <div>
              <Music ref={div => (this.music = div)} />
              <Scroll />
            </div>
          )}
        />
        <Route
          path="/"
          render={props =>
            props.location.pathname !== "/" && (
              <Link to="/">
                <img
                  className={
                    props.location.pathname == "/about"
                      ? "home"
                      : "homeNotAbsolute"
                  }
                  src="https://img.icons8.com/ios/30/000000/home-page.png"
                  alt="home"
                />
              </Link>
            )
          }
        ></Route>
        {/* <Route path="/" render={() => <Scroll />} /> */}
        <Route exact path="/" render={() => <Home />} />
        <Route path="/work" component={MyWork} />
        <Route
          path="/about"
          render={({ location }) => <About location={location} />}
        />
        <Route
          path="/contact"
          render={({ location }) => <Soon location={location} />}
        />
      </HashRouter>
    );
  }
}

export default App;
