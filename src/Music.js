import React, { Component } from "react";
import Player from "./Player";
import soundfile from "./audio/lofi.mp3";

class Music extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      playing: false,
      showMusicMessage: true,
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
  };

  hideMusicMessage = () => {
    this.setState({ showMusicMessage: false });
  };
  render() {
    return (
      <div ref={this.props.innerRef} className="musicButtonContainer">
        {this.state.playing ? <Player playing={this.state.playing} /> : null}
        <audio
          ref={this.audioRef}
          src={soundfile}
          autoPlay={this.state.playing}
        ></audio>
        {this.state.showMusicMessage ? (
          <div className="toolTip">
            pst..could i interest you in some music for your stay?
            <button onClick={this.hideMusicMessage} className="noThanks">
              No..thanks
            </button>
          </div>
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
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Music innerRef={ref} {...props} />
));
