import React, { Component } from "react";
import NameSvg from "./name";
import Scroll from "./Scroll";
import Music from "./Music";
import Hero from "./Hero";
import styled, { keyframes } from "styled-components";
import { TweenMax, TweenLite, Power2, TimelineLite } from "gsap";
import { NavLink, Link } from "react-router-dom";

class Home extends Component {
  nav = null;
  hero = null;
  welcome = null;
  wrapper = null;
  scroll = null;
  name = null;
  tl = new TimelineLite({ paused: true });
  lis = [];
  welcomeTxt = [];

  changePlayingState = () => {
    this.setState({ playing: !this.state.playing });
  };

  hideMusicMessage = () => {
    this.setState({ showMusicMessage: false });
  };

  state = {
    liText: [
      { li: "My Work", id: 1, to: "/work" },
      { li: "About Me", id: 2, to: "/about" }
    ],
    welcomeTxt: [{ word: "Hello", id: 1 }, { word: "I'm", id: 2 }],
    playing: false,
    showMusicMessage: true
  };

  componentDidMount() {
    if (!sessionStorage.getItem("welcomePlayed")) {
      this.tl
        .staggerTo(this.welcomeTxt, 0.9, { opacity: 1, y: 70 }, 0.1)
        .staggerTo(
          this.welcomeTxt,
          0.9,
          { visibility: "visible", opacity: 0, delay: 0.5 },
          "prev"
        )
        .to(this.name, 0.9, { y: 350, x: -400 }, "prev+=.5")
        .to(this.nav, 0.9, { opacity: 1 }, "prev+=.5")
        .to(this.hero, 0.9, { opacity: 1 }, "p rev+=.9")
        .staggerTo(this.lis, 0.9, { opacity: 1, x: 20 }, "prev+=.9")
        .to(this.music, 0.9, { opacity: 1 }, "prev+=2")
        .to(this.scroll, 0.9, { visibility: "visible" }, "prev+=2");

      this.tl.play();
      sessionStorage.setItem("welcomePlayed", "yep");
    } else {
      this.tl
        .staggerTo(this.welcomeTxt, 0.9, { opacity: 1, y: 70 }, 0.1)
        .staggerTo(
          this.welcomeTxt,
          0.9,
          { visibility: "visible", opacity: 0, delay: 0.5 },
          "prev"
        )
        .to(this.name, 0.9, { y: 350, x: -400 }, "prev+=.5")
        .to(this.nav, 0.9, { opacity: 1 }, "prev+=.5")
        .to(this.hero, 0.9, { opacity: 1 }, "p rev+=.9")
        .staggerTo(this.lis, 0.9, { opacity: 1, x: 20 }, "prev+=.9")
        .to(this.music, 0.9, { opacity: 1 }, "prev+=2")
        .to(this.scroll, 0.9, { visibility: "visible" }, "prev+=2")

        .progress(1, false);
    }
  }

  render() {
    return (
      <Wrapper ref={div => (this.wrapper = div)}>
        <Nav ref={div => (this.nav = div)}>
          Logo
          <ul>
            {this.state.liText.map((element, index) => (
              <NavLink to={this.state.liText[index].to}>
                <li
                  className="linx"
                  key={index}
                  ref={li => (this.lis[index] = li)}
                >
                  {element.li}
                </li>
              </NavLink>
            ))}
          </ul>
          <Logo />
        </Nav>
        <Welcome ref={div => (this.welcome = div)}>
          {this.state.welcomeTxt.map((element, index) => (
            <div
              className={`welcome${index}`}
              key={index}
              ref={div => (this.welcomeTxt[index] = div)}
            >
              {element.word}
              <br />
            </div>
          ))}
          <Name ref={div => (this.name = div)}>
            <NameSvg className="namesvg" />
          </Name>
        </Welcome>

        <Music
          ref={div => (this.music = div)}
          changePlayingState={this.changePlayingState}
          playing={this.state.playing}
          showMusicMessage={this.state.showMusicMessage}
          hideMusicMessage={this.hideMusicMessage}
        />

        <Scroll ref={div => (this.scroll = div)} />
        <Enter />
        <Hero ref={div => (this.hero = div)} />
      </Wrapper>
    );
  }
}

export default Home;

const Wrapper = styled.div`
  display: grid;
  background: #f8f8f8;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  font-family: "Roboto Condensed", sans-serif;
  transform: translateX(-15px);
  overflow: hidden;
`;

const Nav = styled.div`
  opacity: 0;
  color: black;
  padding: 2em;
  grid-column: 1 / 3;
  grid-row: 1/6;
  font-family: Neou-Bold;
  & ul {
    list-style: none;
    padding: 0;
    margin-top: 3em;
    font-size: 1.1em;
  }
  & a {
    text-decoration: none;
    color: black;
  }
  & li {
    opacity: 0;
    padding-bottom: 0.5em;
  }
`;

const Logo = styled.div``;

const appear = keyframes`
    0% {
      opacity:0
    } 
    50%{
      opacity:.7
    }
    100% {
      opacity:1;
    }
  `;

const Name = styled.div`
    position:absolute;
    top:-6%;
    left:-12%;
    height:300%;
    grid-column: 1/5;
    grid-row: 9/13;
    z-index: 3;
    }
  `;

const Enter = styled.div`
  opacity: 0;
  background: white;
  grid-column: 11/13;
  grid-row: 9/13;
`;

const Welcome = styled.div`
  position: relative;
  transform: translate(100px, 100px);
  font-family: Neou-Thin;
  font-size: 100px;
`;
