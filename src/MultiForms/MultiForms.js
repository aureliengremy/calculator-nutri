import React, { useState } from "react";
import WelcomeCard from "../Form/WelcomeCard";
import ThanksCard from "../Form/ThanksCard";
import InfoCard from "../Form/InfoPersoCard";

import "./MultiForms.css";

function MultiForms(props) {
  const [formIndex, setFormIndex] = useState(1);
  const [allData, setAllData] = useState({
    sexe: "",
    age: "",
    height: "",
    weight: "",
    txmg: "",
  });

  const modifyIndex = (index, data) => {
    setFormIndex(index);

    if (data) {
      // console.log(data);
      // const newData = { ...allData };
      // const firstData = Object.keys(data)[0];
      // newData[firstData] = data[firstData];
      // setAllData(newData);
      const newData = { ...allData, ...data };
      setAllData(newData);
    }
  };

  return (
    <div className="MultiForms-section">
      {formIndex === 1 ? (
        <WelcomeCard modifyIndex={modifyIndex} />
      ) : formIndex === 2 ? (
        <InfoCard modifyIndex={modifyIndex} />
      ) : (
        <ThanksCard modifyIndex={modifyIndex} sendInfo={allData} />
      )}
    </div>
  );
}

export default MultiForms;
