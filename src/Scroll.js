import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Scroll = React.forwardRef((props, ref) => (
  <ScrollSpy ref={ref}>
    <NavLink exact to="/" title="Home">
      <div className="one" />
    </NavLink>
    <NavLink to="/work" title="My Work">
      <div className="two" />
    </NavLink>
    <NavLink to="/about" title="About Me">
      <div className="three" />
    </NavLink>
  </ScrollSpy>
));

const ScrollSpy = styled.div`
  position: absolute;
  top: 50%;
  right: 4%;
  display: flex;
  justify-content: center;
  & .one,
  .two,
  .three {
    height: 10px;
    width: 10px;
    background: transparent;
    border: 0.5px solid black;
    border-radius: 50%;
    margin-right: 0.5em;
  }
`;

export default Scroll;
