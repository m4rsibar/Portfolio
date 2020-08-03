import React, { Component } from "react";

class Soon extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "black" }}>... So roomy in here ...</h1>{" "}
        <h4 style={{ textAlign: "center", fontWeight: "lighter" }}>
          coming soon
        </h4>
        <h5 style={{ textAlign: "center", fontWeight: "lighter" }}>
          {" "}
          In the meantime... here's where you can find me
        </h5>
        <h5 style={{ textAlign: "center", fontWeight: "normal" }}>
          <a href="https://www.linkedin.com/in/marissasmithy/">Linkedin</a>
        </h5>
        <h5 style={{ textAlign: "center", fontWeight: "normal" }}>
          <a href="https://github.com/m4rsibar">Github</a>
        </h5>
      </div>
    );
  }
}

export default Soon;
