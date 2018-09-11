import React from 'react';
import './Results/Results.css'


const ResultsCards = (props) => {
    const {dataArray, removePet} = props;
    return (
        <div>
            {dataArray.map(petCard => {
                return (
                    <div className={`card${petCard.shake ? " shake" : ""}`}>
  <p>lorem ipsum</p>
    <div className="img-container">
      <img alt={petCard.name} src={petCard.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>id:</strong> {petCard.id}
        </li>
        <li>
          <strong>animal:</strong> {petCard.animal}
        </li>
        <li>
          <strong>name:</strong> {petCard.name}
        </li>
        <li>
          <strong>breed:</strong> {petCard.breed}
        </li>
      </ul>
    </div>
    <span onClick={() => removePet(petCard.id)} className="remove">
      𝘅
    </span>
  </div>
                );
            })}
        </div>
        
    );
};
export default ResultsCards;