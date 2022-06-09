import React from "react";
import "./AlertButton.css";

function AlertButton(props: { [x: string]: any; variant: any; children: any }) {
  const { variant, children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default AlertButton;
