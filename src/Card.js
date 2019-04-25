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
          <p className="card-para"> {props.card.info}</p>
          <p className="card-para"> {props.card.info2}</p>
        </div>
      </div>
      <div className="prevnext">
        <button
          className="pn-btn"
          id="prev"
          ref={ref.ref2}
          onClick={() => props.slideUp()}
        />
        <button
          className="pn-btn"
          id="next"
          onClick={() => props.slideDown()}
        />
      </div>
    </div>
  );
});
