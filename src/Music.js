import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Player from "./Player";
import soundfile from "./sly.mp3";

class Music extends Component {
  render() {
    return (
      <MusicB ref={this.props.innerRef}>
        {this.props.playing ? (
          <audio ref={this.sound} src={soundfile} autoPlay />
        ) : null}
        {this.props.showMusicMessage ? (
          <ToolTip>
            pst..could i interest you in some music for your stay?
            <button onClick={this.props.hideMusicMessage} className="noThanks">
              No..thanks
            </button>
          </ToolTip>
        ) : null}

        <a href="#" onClick={this.props.changePlayingState}>
          {this.props.playing ? (
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
              onClick={this.props.hideMusicMessage}
            />
          )}
        </a>
        {this.props.playing ? <Player playing={this.props.playing} /> : null}
      </MusicB>
    );
  }
}

const MusicB = styled.div`
  ${"" /* opacity: 0; */}
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

export default React.forwardRef((props, ref) => (
  <Music innerRef={ref} {...props} />
));
