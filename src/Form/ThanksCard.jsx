import React from "react";

function ThanksCard(props) {
  console.log(props.sendInfo);

  const data = props.sendInfo;
  return (
    <div className="card">
      <div className="card-header">Info personnel</div>
      <div className="card-body">
        <p className="card-text">
          Merci d'avoir utilisé mon calculateur nutrition Vous êtes un{" "}
          {data.sexe === "men" ? "homme" : "femme"} de {data.age} qui pèse{" "}
          {data.weight}
        </p>
        <button
          href="#"
          className="btn btn-primary"
          onClick={() => props.modifyIndex(1)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ThanksCard;
