import React, { HTMLAttributes, ReactNode } from "react";
import style from "./Button.module.css";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  variant: string;
}

export const Button = ({ buttonText, variant, ...props }: Props) => {
  return (
    <button className={`${style.button} ${style[variant]}`} {...props}>
      {buttonText}
    </button>
  );
};

export default Button;
