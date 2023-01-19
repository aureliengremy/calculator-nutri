import React, { useState } from "react";

function SexeCard(props) {
  const [formData, setFormData] = useState({
    age: "?",
    sexe: "non-binary",
  });

  const handleRadio = (e) => {
    setFormData({
      ...formData,
      sexe: e.target.value,
    });
    console.log(formData);
  };
  const handleText = (e) => {
    setFormData({
      ...formData,
      age: e.target.value,
    });
    console.log(formData);
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
          <label htmlFor="men">Homme</label>
          <input
            type="radio"
            onChange={handleRadio}
            name="sexe"
            id="sexe"
            value="men"
          />
          <label htmlFor="women">Femme</label>
          <input
            type="radio"
            onChange={handleRadio}
            name="sexe"
            id="sexe"
            value="women"
          />
          <label htmlFor="age">Age :</label>
          <input type="text" onChange={handleText} name="age" id="age" />
        </form>
        <button
          href="#"
          className="btn btn-primary"
          onClick={() => props.modifyIndex(3, formData)}
        >
          Go somewhere
        </button>
      </div>
    </div>
  );
}

export default SexeCard;
