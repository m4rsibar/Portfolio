import React, { Component } from "react";
import { TimelineLite, Power3 } from "gsap";
import Check from "./Check";

class Form extends Component {
  state = {
    sent: false,
    name: "",
    email: "",
    message: ""
  };

  tl = new TimelineLite({ paused: true });

  blueBox = null;
  contact = null;
  sent = null;
  sendMsg = null;
  thankYou = null;
  leftBox = null;

  handleSubmit = e => {
    e.preventDefault();

    this.tl
      .to(this.blueBox, 0.65, { x: "-87%" })
      .to(this.leftBox, 0.1, { opacity: 0 }, "smooth")
      .to(this.thankYou, 0.65, { opacity: 1 }, "smooth")
      .to(this.contact, 0.5, { height: 0, visibility: "hidden" }, "smooth")
      .to(this.sent, 0.65, { visibility: "visible" }, "smooth+=.2")
      .to(this.sendMsg, 0.65, { opacity: 0 });
    this.tl.play();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        className={
          this.props.location.pathname == "/contact"
            ? "centered"
            : "form-container"
        }
      >
        <div className="welcome">
          <div className="bluebox" ref={div => (this.blueBox = div)}>
            <div className="contact" ref={div => (this.contact = div)}>
              <h1>contact me</h1>
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <textarea
                  rows={12}
                  cols={30}
                  placeholder="Your Message Here"
                  className="message"
                  name="message"
                  onChange={this.handleChange}
                  value={this.state.message}
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
            </div>
          </div>
          <div className="leftbox" ref={div => (this.leftBox = div)}>
            <h2 className="title">
              <br />
              Let's <span>Create</span>
            </h2>
            <p className="desc">
              something <span>together</span>
            </p>
          </div>
          <div className="rightbox" ref={div => (this.thankYou = div)}>
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
