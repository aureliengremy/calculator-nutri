import React from "react";
import { Link } from "react-router-dom";

function InfoCard(props) {
  return (
    <div className="card">
      <div className="card-header">Info personnel</div>
      <div className="card-body">
        <p className="card-text">
          Quelques information afin de faire une jolie fiche personnalisé
        </p>

        <button
          href="#"
          className="btn-primary"
          onClick={() => props.modifyIndex(2)}
        >
          Go
        </button>
      </div>
    </div>
    
  );
}

export default InfoCard;
