import React, { useState } from "react";

function WeightCard(props) {
  const [formData, setFormData] = useState({
    weight: "?",
  });

  const handleText = (e) => {
    setFormData({
      weight: e.target.value,
    });
  };

  const preventFunc = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card">
      <div className="card-header">Info personnel</div>
      <div className="card-body">
        <p className="card-text">Simple présentation</p>
        <form onSubmit={preventFunc} action="">
          <label htmlFor="age">Poids :</label>
          <input type="text" onChange={handleText} name="weight" id="weight" />
        </form>
        <button
          href="#"
          className="btn btn-primary"
          onClick={() => props.modifyIndex(5, formData)}
        >
          Go somewhere
        </button>
      </div>
    </div>
  );
}

export default WeightCard;
