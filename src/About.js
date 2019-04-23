import React, { Component } from "react";
import Card from "./Card";
import { TimelineLite } from "gsap";
import styled from "styled-components";

class About extends Component {
  constructor(props) {
    super(props);
    this.createCards = this.createCards.bind(this);
    this.tl = new TimelineLite({});

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
    this.flag++;
    if (this.flag === this.state.aboutCards.length) {
      this.flag--;
      return;
    }
    var oldCard = this["card" + (this.flag - 1)].current,
      newCard = this["card" + this.flag].current,
      newPercent = -100 * this.flag;
    if (!this.tl.isActive()) {
      this.tl.clear().seek(0);
    }
    this.tl
      .to(oldCard.firstChild, 1, { yPercent: newPercent })
      .to(oldCard.lastChild, 1, { yPercent: newPercent }, "-=1")
      .fromTo(
        [newCard.firstChild, newCard.lastChild],
        1,
        { yPercent: newPercent + 100 },
        { yPercent: newPercent },
        "-=1"
      );
  };

  slideDown = () => {
    this.flag--;
    if (this.flag < 0) {
      this.flag = 0;
      return;
    }
    var oldCard = this["card" + (this.flag + 1)].current,
      newCard = this["card" + this.flag].current,
      newPercent = -100 * this.flag;
    if (!this.tl.isActive()) {
      this.tl.clear().seek(0);
    }
    this.tl
      .to(oldCard.firstChild, 1, { yPercent: newPercent })
      .to(oldCard.lastChild, 1, { yPercent: newPercent }, "-=1")
      .fromTo(
        [newCard.firstChild, newCard.lastChild],
        1,
        { yPercent: newPercent - 100 },
        { yPercent: newPercent },
        "-=1"
      );
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
