//eslint-disable
import React from "react";
import { CardData } from "./CardData";

function Card() {
  return (
    <div className="cards-lg-container">
      {CardData.map((item, index) => {
        return (
          <div className="card-container">
            <h3>{item.fontPrimaryName}</h3>
            <p>{item.fontSecondaryText}</p>
            <h3>Perfect Pairs:</h3>
            <div className="fonts-bottom">
              <p>
                {item.fontPrimaryName} Light, {item.fontSecondaryName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
