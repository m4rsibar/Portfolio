import React, { Component } from "react";
import { TweenMax, TweenLite, TimelineLite } from "gsap";

export default React.forwardRef((props, ref) => {
  return (
    <div className="slide">
      <div className={`number${props.id} card`} ref={ref.ref1}>
        <div className={`${props.card.id} card-img`} />
        <div className="card-content">
          <p className="card-theme">{props.card.theme}</p>
          <h2 className="card-header">{props.card.header}</h2>
          <p className="card-para"> lorem lorem</p>
          <a className="card-link" href="#">
            Read
          </a>
        </div>
      </div>
      <div className="prevnext">
        <button
          className="pn-btn"
          id="prev"
          ref={ref.ref2}
          onClick={() => props.beginAnimation()}
        />
        <button className="pn-btn" id="next" />
      </div>
    </div>
  );
});
