import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";
import style from "./Toast.module.css";

export interface Props {
  toastText: string;
  href?: string | undefined;
}

const timeout = 3000;

export const Toast = ({ toastText, href = undefined }: Props) => {
  const [opacity, setOpacity] = useState<number>(1);
  const [display, setVisibility] = useState<string>("flex");

  setTimeout(() => {
    setOpacity(0);
  }, timeout);

  useEffect(() => {
    if (opacity === 0)
      setTimeout(() => {
        setVisibility("none");
      }, 2000);
  }, [opacity]);

  return href === undefined ? (
    <div
      className={`${style.toast}`}
      style={{ opacity: opacity, display: display }}
      onMouseOver={() => {
        setOpacity(1);
      }}
    >
      {toastText}
    </div>
  ) : (
    <Link href={href}>
      <a
        className={`${style.toast} ${style.link}`}
        style={{ opacity: opacity }}
      >
        {toastText}
      </a>
    </Link>
  );
};

export default Toast;
