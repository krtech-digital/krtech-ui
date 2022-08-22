import React, { HTMLAttributes } from "react";
import style from "./Button.module.css";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: string;
  width?: string;
  height?: string;
  padding?: string;
}

export const Button = ({
  text,
  variant,
  width,
  height,
  padding,
  ...props
}: Props) => {
  return (
    <button
      className={`${style.button} ${style[variant]}`}
      style={{ width, height, padding }}
      {...props}
    >
      {text}
    </button>
  );
};
