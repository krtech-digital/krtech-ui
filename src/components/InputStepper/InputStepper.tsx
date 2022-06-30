import React from "react";
import "./Button.css";

function Button1(props: { [x: string]: any; variant: any; children: any }) {
  const { variant, children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button1;
