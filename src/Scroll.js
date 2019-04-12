import React, { component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Scroll = React.forwardRef((props, ref) => (
  <ScrollSpy ref={ref}>
    <NavLink exact to="/" title="Home">
      <div className="one" />
    </NavLink>
    <NavLink to="/work" title="My Work">
      <div className="two" />
    </NavLink>
    <div className="three" />
  </ScrollSpy>
));

const ScrollSpy = styled.div`
  visibility: hidden;
  grid-column: 11/13;
  grid-row: 6/9;
  display: flex;
  ${"" /* flex-direction: column; */}
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
