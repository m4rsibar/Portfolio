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
    this.flag = 0;
  }

  state = {
    aboutCards: [
      { id: "img01", theme: "one ", header: "testing...1" },
      { id: "img02", theme: "two", header: "testing..2" },
      { id: "img03", theme: "three", header: "testing..3" }
    ]
  };

  componentDidMount() {
    if (this.flag === 0) {
      this.tl
        .to(
          this.card0.current,
          1.8,
          {
            y: "-100%"
          },
          0.9
        )
        .to(this.card1.current, 1.8, { y: "-100%" }, 0.9)
        .to(this.card1.current, 1.8, { y: "-200%" }, 0.9)

        .to(this.card2.current, 1.8, { y: "-200%" }, 0.9);

      this.tl.play();
      this.flag += 1;
      console.log(this.flag);
    }
  }

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
        ref={this["card" + i]}
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
