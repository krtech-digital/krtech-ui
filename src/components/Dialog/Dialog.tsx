import React from "react";
import style from "../Dialog/Dialog.module.css";

export interface Props {
  variant: string;
}

export const Dialog = ({ variant }: Props) => {
  if (variant === "a") {
    return (
      <div className={style.dialogBox}>
        <div className={style.header}>{"ACCEPT NOTIFICATIONS?"}</div>
        <div className={style.desc}>
          {"Do you want to be notified about new updates?"}
        </div>
        <button className={style.b1}>{"Yes"}</button>
        <button className={style.b2}>{"No"}</button>
      </div>
    );
  } else if (variant === "b") {
    return (
      <div className={style.dialogBox2}>
        <div className={style.header}>{"ACCEPT NOTIFICATIONS?"}</div>
        <div className={style.desc}>
          {"Do you want to be notified about new updates?"}
        </div>
        <button className={style.b1v}>{"Yes"}</button>
        <button className={style.b2v}>{"No"}</button>
      </div>
    );
  }
};
