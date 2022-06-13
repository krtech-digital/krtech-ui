import React, { useEffect, useRef } from "react";
import style from "../Popover/Popover.module.css";

export interface Props {
  popupContent?: React.ReactNode;
}

export const Popover = ({ popupContent }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => {
      if (!popupRef.current) {
        return;
      }
      popupRef.current.style.display = "none";
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div
        className={style.popupButton}
        onClick={(e) => {
          console.log(popupRef.current?.style.display);
          if (!popupRef.current) {
            return;
          }
          if (popupRef.current.style.display === "none") {
            popupRef.current.style.display = "block";
          } else if (popupRef.current.style.display === "block") {
            popupRef.current.style.display = "none";
          }

          e.stopPropagation();
        }}
      ></div>
      <div
        ref={popupRef}
        style={{ display: "none" }}
        className={style.popupWindow}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {popupContent}
      </div>
    </div>
  );
};
