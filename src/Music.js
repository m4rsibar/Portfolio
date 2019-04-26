import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Player from "./Player";
import soundfile from "./sly.mp3";

class Music extends Component {
  state = {
    playing: false,
    showMusicMessage: true
  };

  changePlayingState = () => {
    this.setState({ playing: !this.state.playing });
  };

  hideMusicMessage = () => {
    this.setState({ showMusicMessage: false });
  };

  render() {
    return (
      <MusicB ref={this.props.innerRef}>
        {this.state.playing ? (
          <audio ref={this.sound} src={soundfile} autoPlay />
        ) : null}
        {this.state.showMusicMessage ? (
          <ToolTip>
            pst..could i interest you in some music for your stay?
            <button onClick={this.hideMusicMessage} className="noThanks">
              No..thanks
            </button>
          </ToolTip>
        ) : null}

        <a onClick={this.changePlayingState}>
          {this.state.playing ? (
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
              onClick={this.hideMusicMessage}
            />
          )}
        </a>
        {this.state.playing ? <Player playing={this.state.playing} /> : null}
      </MusicB>
    );
  }
}

const MusicB = styled.div`
  ${"" /* grid-column: 11/13;
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3em; */}
  right: 4em;
  top: 5em;
  z-index: 999999;
  position: absolute;
`;

const ToolTip = styled.div`
  position: absolute;
  height: auto;
  padding: 0.3em;
  width: 200px;
  border: 0.3px solid black;
  top: 5em;
  right: 0;
`;

export default React.forwardRef((props, ref) => (
  <Music innerRef={ref} {...props} />
));
