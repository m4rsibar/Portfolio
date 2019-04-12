import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Hero = React.forwardRef((props, ref) => (
  <HeroStyled ref={ref} className="hero" />
));

const HeroStyled = styled.div`
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

export default Hero;
