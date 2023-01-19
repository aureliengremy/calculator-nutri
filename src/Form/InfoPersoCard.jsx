import React, { useState } from "react";

function InfoPerso(props) {
  const [formData, setFormData] = useState({
    age: "?",
    sexe: "non-binary",
    height: "",
  });

  const handleSex = (e) => {
    setFormData({
      ...formData,
      sexe: e.target.value,
    });
  };
  const handleAge = (e) => {
    setFormData({
      ...formData,
      age: e.target.value,
    });
  };
  const handleHeight = (e) => {
    setFormData({
      ...formData,
      height: e.target.value,
    });
  };
  const handleWeight = (e) => {
    setFormData({
      ...formData,
      weight: e.target.value,
    });
  };

  // exemple keep only number : https://codepen.io/jSilverize/pen/wWpmAO
  // https://www.w3resource.com/javascript/form/all-numbers.php#:~:text=To%20get%20a%20string%20contains,expression%20against%20the%20input%20value.
  // const onlyNumbers = (text) => {
  //   // Replace regex '/[^0-9]/g'
  //   text = text.replace(/[^0-9]/g, '');

  //   // Set to HTML
  //   var inputResult   = document.getElementById('cellphone-number-digits');
  //   inputResult.value = text;
  // }
  // max number : https://stackoverflow.com/questions/5842747/how-can-i-use-javascript-to-limit-a-number-between-a-min-max-value/54464006

  const preventFunc = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card">
      <div className="card-header">Information personnel</div>
      <div className="card-content">
        <form action="" onSubmit={preventFunc}>
          <div className="card-subject__sex">
            <p className="card-subject__sex-title">Vous êtes un.e ? </p>
            <label htmlFor="men">Homme</label>
            <input
              type="radio"
              onChange={handleSex}
              name="sexe"
              id="sexe"
              value="men"
            />
            <label htmlFor="women">Femme</label>
            <input
              type="radio"
              onChange={handleSex}
              name="sexe"
              id="sexe"
              value="women"
            />
          </div>
          <div className="card-subject__age">
            <label htmlFor="age">Quel est votre age ?</label>
            <input
              type="text"
              onChange={handleAge}
              name="age"
              id="age"
              min="1"
              max="99"
            />
          </div>
          <div className="card-subject__height">
            <label htmlFor="height">Quel est votre taille ? (cm)</label>
            <input
              type="text"
              onChange={handleHeight}
              name="height"
              id="height"
            />
          </div>
          <div className="card-subject__weight">
            <label htmlFor="height">Quel est votre poids ? (kg)</label>
            <input
              type="text"
              onChange={handleWeight}
              name="weight"
              id="weight"
              min="20"
              max="200"
            />
          </div>
        </form>
      </div>
      <button
        className="card-btn btn btn-primary"
        onClick={() => props.modifyIndex(3, formData)}
      >
        Suivant
      </button>
    </div>
  );
}

export default InfoPerso;
