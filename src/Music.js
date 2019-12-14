import React, { Component } from "react";
import styled from "styled-components";
import Player from "./Player";
import soundfile from "./lofi.mp3";

class Music extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      playing: false,
      showMusicMessage: true
    };
  }

  changePlayingState = () => {
    if (!this.state.playing) {
      this.setState({ playing: true });
      this.audioRef.current.play();
    } else {
      this.setState({ playing: false });
      this.audioRef.current.pause();
    }
    console.log(this.state.playing);
  };

  hideMusicMessage = () => {
    this.setState({ showMusicMessage: false });
  };
  render() {
    return (
      <MusicB ref={this.props.innerRef}>
        <audio
          ref={this.audioRef}
          src={soundfile}
          autoPlay={this.state.playing}
        ></audio>
        {this.state.showMusicMessage ? (
          <ToolTip>
            pst..could i interest you in some music for your stay?
            <button onClick={this.hideMusicMessage} className="noThanks">
              No..thanks
            </button>
          </ToolTip>
        ) : null}

        <a onClick={() => this.changePlayingState()}>
          {this.state.playing ? (
            <img
              src="https://img.icons8.com/material/48/000000/circled-pause.png"
              key={"pause"}
              className="pauseButton"
              alt="pause button"
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
  right: 4em;
  top: 5em;
  z-index: 999999;
  position: absolute;
  opacity: 0;
`;

const ToolTip = styled.div`
  position: absolute;
  font-size: 0.7em;
  height: auto;
  padding: 0.3em;
  width: 200px;
  border: 0.3px solid black;
  border-radius: 10px;
  top: 5.5em;
  right: 0;
  padding-bottom: 0.2em;
`;

export default React.forwardRef((props, ref) => (
  <Music innerRef={ref} {...props} />
));
