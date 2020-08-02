import React, { Component } from "react";
import Card from "./Card";
import { TimelineLite } from "gsap";
import Soon from "./Soon";
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
        header: "Technology",
        info: "React | Animation | Python | SQL",
      },
      {
        id: "img02",
        header: "A Little About me",
        info: "A learning software development intern in Louisville, KY",
      },
      {
        id: "img03",
        info: <a href="#"> Github </a>,
        info: <Soon location={this.props.location} />,
      },
    ],
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
        {/* <Link to="/">
          <img
            className="home"
            src="https://img.icons8.com/ios/30/000000/home-page.png"
            alt="home"
          />
        </Link> */}
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
        removePadding={"noPadding"}
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
