import React, { Component } from "react";
import "./App.scss";
import styled, { keyframes } from "styled-components";
import { TweenMax, TweenLite, Power2, TimelineLite } from "gsap";
import NameSvg from "./name";
import Player from "./Player";
import ScrollSpy from "./ScrollSpy";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
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

  state = {
    liText: [{ li: "My Work", id: 1 }, { li: "About Me", id: 2 }],
    welcomeTxt: [{ word: "Hello", id: 1 }, { word: "I'm", id: 2 }],
    playing: false
  };

  componentDidMount() {
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
  }

  render() {
    return (
      <Wrapper ref={div => (this.wrapper = div)}>
        <Nav ref={div => (this.nav = div)}>
          Logo
          <ul>
            {// map through the elements
            this.state.liText.map((element, index) => (
              <a href="#">
                <li key={index} ref={li => (this.lis[index] = li)}>
                  {element.li}
                </li>
              </a>
            ))}
          </ul>
          <Logo />
        </Nav>
        <Welcome ref={div => (this.welcome = div)}>
          {// map through the elements
          this.state.welcomeTxt.map((element, index) => (
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

        <Music ref={div => (this.music = div)}>
          <ToolTip>
            pst..could i interest you in some music for your stay?
            <button className="noThanks">No..thanks</button>
          </ToolTip>
          <a href="#" onClick={this.changePlayingState}>
            {this.state.playing ? (
              <img
                src="https://img.icons8.com/material/48/000000/circled-pause.png"
                key={"pause"}
              />
            ) : (
              <img
                src="https://img.icons8.com/material-rounded/48/000000/circled-play.png"
                alt="play button"
                key={"play"}
                className="playButton"
              />
            )}
          </a>
          {this.state.playing ? <Player playing={this.state.playing} /> : null}
        </Music>

        <Scroll ref={div => (this.scroll = div)}>
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </Scroll>
        <Enter />
        <Hero ref={div => (this.hero = div)} className="hero" />
      </Wrapper>
    );
  }
}

export default App;

const building = keyframes`
  0% {
    left: 0;
    width:0;
    opacity:1;
  } 
  50%{
    left:0;
    width:70%;
    opacity:.7
  }
  100% {
    left: 70%;
    width:0;
    opacity:0;
  }
`;

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

const Music = styled.div`
  opacity: 0;
  grid-column: 11/13;
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3em;
  position: relative;
`;

const ToolTip = styled.div`
  ${"" /* visibility: hidden; */}
  position: absolute;
  height: auto;
  padding: 0.3em;
  width: auto;
  bottom: 5.5em;
  border: 0.3px solid black;
  left: -1em;
`;

const Scroll = styled.div`
  visibility: hidden;
  grid-column: 11/13;
  grid-row: 6/9;
  display: flex;
  ${"" /* flex-direction: column; */}
  justify-content: center;

  & .one {
    height: 10px;
    width: 10px;
    background: black;
    border-radius: 50%;
    margin-right: 0.5em;
  }

  & .two,
  .three {
    height: 10px;
    width: 10px;
    background: transparent;
    border: 0.5px solid black;
    border-radius: 50%;
    margin-right: 0.5em;
  }
`;

const Enter = styled.div`
  opacity: 0;
  background: white;
  grid-column: 11/13;
  grid-row: 9/13;
`;

const Hero = styled.div`
  opacity: 0;
  grid-column: 4/12;
  grid-row: 1/12;
  transform: translate(-20%, 20%);

  &:before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    height: 100%;
    width: 0%;
    display: block;
    animation: ${building} 1s;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }
`;

const Welcome = styled.div`
  position: relative;
  transform: translate(100px, 100px);
  font-family: Neou-Thin;
  font-size: 100px;
`;
