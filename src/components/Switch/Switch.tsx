import React from "react";
import style from "./Switch.module.css";

export interface Props {
  variant: string;
}

const Switch = ({ variant }: Props) => {
  return (
    <div className={`${style.outer} ${style[variant]}`}>
      <div className={style.inner}></div>
    </div>
  );
};

export default Switch;
