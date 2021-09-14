import React from "react";

function Formulaire(props) {
  return (
    <div>
      <input type="text" onChange={() => props.handleText()} />
    </div>
  );
}

export default Formulaire;
