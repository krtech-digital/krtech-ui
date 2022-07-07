import React, { FC, useState } from "react";
import "./InputStepper.css";

interface Props {
  variant?: string;
}

export const InputStepper: FC<Props> = ({ variant }) => {
  const [number, setNumber] = useState(0);

  function addNumber() {
    setNumber(number + 1);
  }
  function substractNumber() {
    setNumber(number - 1);
  }
  return (
    <>
      {variant !== "weird" && (
        <div className={`stepper-${variant}`}>
          <button className="minus" onClick={substractNumber}>
            -
          </button>
          <div className={`display-${variant}`}>{number}</div>
          <button className="plus" onClick={addNumber}>
            +
          </button>
        </div>
      )}
      {variant === "weird" && (
        <div className="stepper-weird">
          <div className="display-weird">{number}</div>
          <div className="group-arrows">
            <button className="up" onClick={addNumber}>
              &#8963;
            </button>
            <button className="down" onClick={substractNumber}>
              &#8963;
            </button>
          </div>
        </div>
      )}
    </>
  );
};
