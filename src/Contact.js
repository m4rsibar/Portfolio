import React, { Component } from "react";

var Form = () => {
  return (
    <div className="form-container">
      <div className="welcome">
        <div className="bluebox">
          <div className="contact">
            <h1>contact me</h1>
            <form action="mailto:m4rsibar@gmail.com" autoComplete="off">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                rows={12}
                cols={30}
                placeholder="Your Message Here"
                className="message"
                defaultValue={""}
              />
            </form>
          </div>
          <div className="sent nodisplay">
            <h1>Sent</h1>
            <svg
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
            </svg>
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
          <button className="button" id="sendmsg">
            send your message
          </button>
        </div>
        <div className="rightbox">
          <h2 className="title">
            <span>Thank You!</span>
          </h2>
          <p className="desc">
            {" "}
            I love receiving <span>messages</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
