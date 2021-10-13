import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Rare Cats</h5>
          <p className="sub-text">This is a Cat!</p>
        </div>
        <div className="col">
          <h5 className="title-text">Regular Dogs</h5>
          <p className="sub-text">This is a Dog!</p>
        </div>
        <div className="col">
          <h5 className="title-text">Anual CatsvsDogs Race!</h5>
          <p className="sub-text">This is a dog running!</p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
