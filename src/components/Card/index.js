import React from "react";
import "./style.css";

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;

// const Card = props => {
//   return (
//     // div to be placed within the Wrapper
//     <div
//       className="img-container"
//       // when clicked, if matches break else add to score
//       // onClick={() => }
//     >
//       {/* place in prop of map of different images of kimcrying */}
//       <img
//         className="img-click"
//         alt={props.id}
//         src={props.image}
//         id={props.id}
//         onClick={() => props.shuffleImages(props.id)}
//       />
//     </div>
//   );
// };

// // Import imgArray to use in Card
// // import imgArray from "../images";

// const Card = props => (
//   <div className="card" onClick={() => props.clickCount(props.id)}>
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//   </div>
// );
