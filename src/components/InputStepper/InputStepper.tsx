import React from "react";
import "./InputStepper.css";

function InputStepper(props: {
  [x: string]: any;
  variant: any;
  children: any;
}) {
  const { variant, children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default InputStepper;
