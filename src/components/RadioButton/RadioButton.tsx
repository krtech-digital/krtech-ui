import React, { useState } from "react";
import "./RadioButton.css";

const RadioButton = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <input
        type="radio"
        checked={clicked}
        onChange={() => {
          setClicked(!clicked);
        }}
      />
      <div
        onClick={() => {
          setClicked(!clicked);
        }}
      />
    </div>
  );
};

export default RadioButton;
