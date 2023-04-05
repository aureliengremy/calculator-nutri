import React, { useState } from 'react'
import Onboarding01 from '../MultiForms/Onboarding01'
import Onboarding02 from '../MultiForms/Onboarding02'
import Onboarding03 from '../MultiForms/Onboarding03'
import MultiForms from '../MultiForms/MultiForms'

const Form = () => {
  const [formIndex, setFormIndex] = useState(1);

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
    <div>
      {formIndex === 1 ? (
        <Onboarding01 modifyIndex={modifyIndex}/>
        // <WelcomeCard modifyIndex={modifyIndex} />
        ) : formIndex === 2 ? (
        <Onboarding02 modifyIndex={modifyIndex} />
          // <InfoCard modifyIndex={modifyIndex} />
          ) : (
        <Onboarding03 modifyIndex={modifyIndex}/>
        // <ThanksCard modifyIndex={modifyIndex} sendInfo={allData} />
      )}
      
      {/* <MultiForms /> */}
      {/* <Onboarding01 /> */}
    </div>
  )
}

export default Form