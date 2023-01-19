import React, { useState } from "react";

function PrezCard(props) {
  const [formData, setFormData] = useState({
    age: "?",
  });

  const handleText = (e) => {
    setFormData({
      age: e.target.value,
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
          <label htmlFor="age">Age :</label>
          <input type="text" onChange={handleText} name="age" id="age" />
        </form>
        <button
          href="#"
          className="btn btn-primary"
          onClick={() => props.modifyIndex(4, formData)}
        >
          Go somewhere
        </button>
      </div>
    </div>
  );
}

export default PrezCard;
