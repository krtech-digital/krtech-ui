import React, { useState } from "react";
import style from "./Select.module.css";

export interface Props {
  placeholder: string;
  width?: string;
  options: string[];
}

export const Select = ({ placeholder, options, width = "400px" }: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [border, setBorder] = useState(false);
  const [value, setValue] = useState(placeholder);

  return (
    <div
      className={style.wrapper}
      style={{ width: width }}
      onBlur={() => {
        setShowOptions(false);
        setBorder(false);
      }}
      tabIndex={0}
    >
      <div
        className={style.buttonContainer}
        onClick={() => {
          setShowOptions(!showOptions);
          setBorder(!border);
        }}
        style={{ borderColor: border ? "#195273" : "#D7D7D7" }}
      >
        <div>{value}</div>
        <svg
          style={{
            transform: showOptions
              ? "rotate(180deg) scale(2)"
              : "rotate(0deg) scale(2)",
            transition: "transform 0.25s",
          }}
          width="6"
          height="4"
          viewBox="0 0 6 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 2.00035L4.99953 -4.3732e-08L6 0.999823L3 4L4.33134e-07 0.999823L1.00047 -2.18536e-07L3 2.00035Z"
            fill="#195273"
          />
        </svg>
      </div>
      {showOptions ? (
        <div className={style.options}>
          {options.map((row: string, index: number) => {
            return (
              <div
                key={index}
                className={style.row}
                onClick={() => {
                  setValue(row);

                  setShowOptions(false);
                  setBorder(false);
                }}
              >
                {row}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
