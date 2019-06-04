import React, { Component } from "react";

export default React.forwardRef((props, ref) => {
  return (
    <div className="slide">
      <div className={`number${props.id} card`} ref={ref.ref1}>
        <div className={`${props.card.id} card-img`} />
        <div className="card-content">
          <h2 className="card-header">{props.card.header}</h2>
          <div className="card-para"> {props.card.info}</div>
          <p className="card-para"> {props.card.info2}</p>
        </div>
      </div>
      <div className="prevnext">
        <button
          className="pn-btn"
          id="prev"
          ref={ref.ref2}
          onClick={() => props.slideDown()}
        />
        <button className="pn-btn" id="next" onClick={() => props.slideUp()} />
      </div>
    </div>
  );
});
