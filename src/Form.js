import React, { Component } from "react";
import { TimelineLite, Power3 } from "gsap";
import Check from "./Check";

class Form extends Component {
  state = {
    sent: false
  };

  tl = new TimelineLite({ paused: true });

  blueBox = null;
  contact = null;
  sent = null;
  sendMsg = null;

  handleSubmit = e => {
    e.preventDefault();
    this.tl
      .to(this.blueBox, 0.65, { x: "-80%" })
      .to(this.contact, 0.65, { height: 0, visibility: "hidden" })
      .to(this.sent, 0.65, { visibility: "visible" })
      .to(this.sendMsg, 0.65, { opacity: 0 });
    this.tl.play();
  };

  render() {
    return (
      <div className="form-container">
        <div className="welcome">
          <div className="bluebox" ref={div => (this.blueBox = div)}>
            <div className="contact" ref={div => (this.contact = div)}>
              <h1>contact me</h1>
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea
                  rows={12}
                  cols={30}
                  placeholder="Your Message Here"
                  className="message"
                  defaultValue={""}
                />
                <button
                  className="button"
                  id="sendmsg"
                  type="submit"
                  ref={button => (this.sendMsg = button)}
                >
                  send your message
                </button>
              </form>
            </div>
            <div className={`sent`} ref={div => (this.sent = div)}>
              <h1>Sent</h1>
              <Check sent={this.state.sent} />
              {/* <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx={26}
                  cy={26}
                  r={25}
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg> */}
            </div>
          </div>
          <div className="leftbox">
            <h2 className="title">
              <br />
              Let's <span>Create</span>
            </h2>
            <p className="desc">
              something <span>together</span>
            </p>
          </div>
          <div className="rightbox">
            <h2 className="title">
              <span>Thank You!</span>
            </h2>
            <p className="desc">
              I love receiving <span>messages</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
