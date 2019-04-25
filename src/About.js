import React, { Component } from "react";
import Card from "./Card";
import { TimelineLite, Power3 } from "gsap";
import { Link } from "react-router-dom";

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
      {
        id: "img01",
        theme: "one ",
        header: "Technology",
        info:
          "I'm interested in animation and making websites come alive. Right now I primarily work with React. I pay close attention to detail and I think good design is crucial. I attend Code Louisville(a program designed to teach software development) the next course I'll be attending is C#",
        info2:
          "I'm interested in learning, and building.  I'm not only interested in software, but hardware too."
      },
      {
        id: "img02",
        theme: "two",
        header: "A Little About me",
        info:
          "I always try to enjoy the simple things in life.  I practice minimalism it reminds me that possessions are easy to replace and things are only that...things.  Minimalism helps me to focus on experiences and making memories. It helps me to be create if I'm organized. One of my most prized posessions is my bicycle, its a 1986 raleigh fixed gear bicycle. Repairing and maintaining my bicycle brings me joy. I have many interests, and they're forever growing."
      },
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
      .to(oldCard.firstChild, 0.65, { yPercent: newPercent })
      .to(oldCard.lastChild, 0.65, { yPercent: newPercent }, "-=.65")
      .fromTo(
        [newCard.firstChild, newCard.lastChild],
        0.65,
        { yPercent: newPercent + 100 },
        { yPercent: newPercent },
        "-=.65"
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

      .to(oldCard.firstChild, 0.65, { yPercent: newPercent })
      .to(oldCard.lastChild, 0.65, { yPercent: newPercent }, "-=.65")
      .fromTo(
        [newCard.firstChild, newCard.lastChild],
        0.65,
        { yPercent: newPercent - 100 },
        { yPercent: newPercent },
        "-=.65"
      );
  };

  render() {
    return (
      <Wrapper className="cardWrapper">
        <Link to="/">
          <img
            className="home"
            src="https://img.icons8.com/ios/30/000000/home-page.png"
          />
        </Link>
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
