import React, { useState } from "react";

const About = () => {
  const [numbers, setNumbers] = useState(0);
  const handleClick = () => {
    setNumbers(numbers + 1);
    console.log(numbers);
  };
  return (
    <div>
      <button onClick={() => handleClick()}>+</button>
      {numbers}
    </div>
  );
};

export default About;
