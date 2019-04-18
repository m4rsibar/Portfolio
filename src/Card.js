import React, { Component } from "react";
import { TweenMax, TweenLite, TimelineLite } from "gsap";

export default React.forwardRef((props, ref) => {
  return (
    <div className="slide">
      <div className="card" ref={ref}>
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
        <button className="pn-btn" id="prev" />
        <button className="pn-btn" id="next" />
      </div>
    </div>
  );
});

// class Card extends Component {
//   constructor(props) {
//     super(props);
//     this.tl = new TimelineLite({ paused: true });
//   }

//   render() {
//     return (
//       <div className="slide">
//         <div className="card" ref={div => (this.card = div)}>
//           <div className={`${this.props.card.id} card-img`} />
//           <div className="card-content">
//             <p className="card-theme">{this.props.card.theme}</p>
//             <h2 className="card-header">{this.props.card.header}</h2>
//             <p className="card-para"> lorem lorem</p>
//             <a className="card-link" href="#">
//               Read
//             </a>
//           </div>
//         </div>
//         <div className="prevnext">
//           <button className="pn-btn" id="prev" />
//           <button className="pn-btn" id="next" />
//         </div>
//       </div>
//     );
//   }
// }
// export default React.forwardRef((props, ref) => <Card ref={ref} {...props} />);
