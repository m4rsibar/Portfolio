import React, { Component } from "react";
import Card from "./Card";
import { TweenMax, TweenLite, TimelineLite } from "gsap";
import styled from "styled-components";

class About extends Component {
  constructor(props) {
    super(props);
    this.createCards = this.createCards.bind(this);
    this.tl = new TimelineLite({ paused: true });
    this.card0 = React.createRef();
    this.card1 = React.createRef();
    this.card2 = React.createRef();
    this.button = React.createRef();
    this.flag = 0;
  }

  state = {
    aboutCards: [
      { id: "img01", theme: "one ", header: "testing...1" },
      { id: "img02", theme: "two", header: "testing..2" },
      { id: "img03", theme: "three", header: "testing..3" }
    ]
  };

  slideUp = () => {
    switch (this.flag) {
      case 0:
        this.tl
          .to(this.card0.current.firstChild, 1, { y: "-100%" }, "firstSlide")
          .to(this.card0.current.lastChild, 1.8, { y: "-100%" }, "firstSlide")
          .to(this.card1.current.firstChild, 1, { y: "-100%" }, "firstSlide")
          .to(this.card1.current.lastChild, 1, { y: "-100%" }, "firstSlide")
          .to(this.card2.current, 1, { y: "-100%" }, "firstSlide");
        this.tl.play();
        this.flag += 1;

        break;
      case 1:
        this.tl
          .to(this.card1.current.firstChild, 1, { y: "-200%" }, "secondSlide")
          .to(this.card1.current.lastChild, 1.8, { y: "-200%" }, "secondSlide")
          .to(this.card2.current.firstChild, 1, { y: "-100%" }, "secondSlide")
          .to(this.card2.current.lastChild, 1, { y: "-100%" }, "secondSlide");
        this.flag += 1;
        this.tl.play();
        break;
    }
  };

  slideDown = () => {
    switch (this.flag) {
      case 1:
        this.flag -= 1;
        this.tl.reverse();
        break;
      case 2:
        this.flag -= 1;
        this.tl.reverse();
        break;
    }
  };

  render() {
    return (
      <Wrapper className="cardWrapper">
        {this.state.aboutCards.map(this.createCards)}
      </Wrapper>
    );
  }

  createCards(card, i) {
    return (
      <Card
        id={i}
        key={i}
        card={card}
        info={this.state.aboutCards}
        ref={{ ref1: this["card" + i], ref2: this.button }}
        slideUp={this.slideUp}
        slideDown={this.slideDown}
      />
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export default About;
