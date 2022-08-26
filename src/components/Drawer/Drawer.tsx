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
        <svg
          className={style.btnLine}
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H10V1H0V0ZM0 3.5H10V4.5H0V3.5ZM0 7H10V8H0V7Z"
            fill="white"
          />
        </svg>
      </button>
      <div className={style.center}>
        {btnPressed && (
          <div className={`${style.drawer} ${style[popupPosition]}`}>
            <div
              className={style.closebtn}
              onClick={() => setBtnPressed(!btnPressed)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9C16.2 7.09044 15.4414 5.25909 14.0912 3.90883C12.7409 2.55857 10.9096 1.8 9 1.8C7.09044 1.8 5.25909 2.55857 3.90883 3.90883C2.55857 5.25909 1.8 7.09044 1.8 9C1.8 10.9096 2.55857 12.7409 3.90883 14.0912C5.25909 15.4414 7.09044 16.2 9 16.2ZM9 7.7274L11.5452 5.1813L12.8187 6.4548L10.2726 9L12.8187 11.5452L11.5452 12.8187L9 10.2726L6.4548 12.8187L5.1813 11.5452L7.7274 9L5.1813 6.4548L6.4548 5.1813L9 7.7274Z"
                  fill="#FD5656"
                />
              </svg>
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
