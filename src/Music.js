import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Player from "./Player";

const Music = React.forwardRef((props, ref) => (
  <MusicB ref={ref}>
    <ToolTip>
      pst..could i interest you in some music for your stay?
      <button className="noThanks">No..thanks</button>
    </ToolTip>
    <a href="#" onClick={props.changePlayingState}>
      {props.playing ? (
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
    {props.playing ? <Player playing={props.playing} /> : null}
  </MusicB>
));

const MusicB = styled.div`
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
  position: absolute;
  height: auto;
  padding: 0.3em;
  width: auto;
  bottom: 5.5em;
  border: 0.3px solid black;
  left: -1em;
`;

export default Music;
