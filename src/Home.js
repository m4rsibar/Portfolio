import React, { Component } from "react";
import { Power1, Power2, TimelineLite } from "gsap";
import { NavLink } from "react-router-dom";
import "./Styles/Home.scss";
import Music from "./Music";

class Home extends Component {
  nav = null;
  wrapper = null;

  music = null;
  tl = new TimelineLite({ paused: true });
  lis = [];

  state = {
    liText: [
      { li: "My Work", id: 1, to: "/work" },
      { li: "About Me", id: 2, to: "/about" },
      { li: "Contact Me", id: 2, to: "/contact" },
    ],
    playing: false,
    showMusicMessage: true,
  };

  componentDidMount() {
    this.tl
      .to(this.nav, 0.9, { opacity: 1 }, "prev+=.5")
      .staggerTo(this.lis, 0.9, { opacity: 1, x: 20 }, "prev+=.9");
    this.tl.play().progress(1, false);
  }

  render() {
    return (
      <div ref={(div) => (this.wrapper = div)} className="wrapper">
        <div ref={(div) => (this.innerWrapper = div)} className="innerWrapper">
          {/* <Music ref={(div) => (this.music = div)} /> */}

          <div ref={(div) => (this.nav = div)} className="nav">
            <ul>
              {this.state.liText.map((element, index) => (
                <NavLink to={this.state.liText[index].to}>
                  <li
                    className="linx"
                    key={index}
                    ref={(li) => (this.lis[index] = li)}
                  >
                    {element.li}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="heroText">
            <div className="textContainer">
              <p>Hi,</p>
              <p>I'm Marissa.</p>
              <p className="smallerText">SOFTWARE DEVELOPER /</p>
              <p className="smallerText">STUDENT</p>
            </div>
          </div>
          <div className="heroImage"> </div>
        </div>
      </div>
    );
  }
}

export default Home;
