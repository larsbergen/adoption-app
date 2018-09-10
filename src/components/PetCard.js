import React from "react";
import './PetCard.css';
const PetCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>id:</strong> {props.id}
        </li>
        <li>
          <strong>animal:</strong> {props.animal}
        </li>
        <li>
          <strong>name:</strong> {props.name}
        </li>
        <li>
          <strong>breed:</strong> {props.breed}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removePet(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default PetCard;