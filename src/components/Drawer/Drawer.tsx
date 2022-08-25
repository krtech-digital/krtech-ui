import React, { HTMLAttributes, ReactElement, useState } from "react";
import { Button } from "../Button/Button";
import style from "../Drawer/Drawer.module.css";

export interface Props extends HTMLAttributes<HTMLLinkElement> {
  popupPosition: string;
  itemsList: Array<ReactElement>;
}

export const Drawer = ({ popupPosition, itemsList }: Props) => {
  const [btnPressed, setBtnPressed] = useState(false);

  return (
    <>
      <button
        className={style.openbtn}
        onClick={() => {
          setBtnPressed(!btnPressed);
        }}
      >
        <img className={style.btnLine} src="images/btnLine.svg" />
      </button>
      <div className={style.center}>
        {btnPressed && (
          <div className={`${style.drawer} ${style[popupPosition]}`}>
            <div
              className={style.closebtn}
              onClick={() => setBtnPressed(!btnPressed)}
            >
              <img src="images/FailedIcon.svg" />
            </div>
            {itemsList.map((item, index) => {
              return React.cloneElement(item, { key: index });
            })}
          </div>
        )}
      </div>
    </>
  );
};
