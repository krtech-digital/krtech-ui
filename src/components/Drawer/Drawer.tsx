import React, { HTMLAttributes } from "react";
import style from "../Drawer/Drawer.module.css";

export interface Props extends HTMLAttributes<HTMLLinkElement> {
  popupPosition: string;
  itemsList: string[];
}

export const Drawer = ({ popupPosition, itemsList }: Props) => {
  function returnItemsInList() {
    let linkedList = [];
    for (let index = 0; index < itemsList.length; index++) {
      linkedList.push(<a>{`${itemsList[index]}`}</a>);
    }
    return linkedList;
  }

  return (
    <div>
      <div id="drawer" className={`${style.drawer}  ${style[popupPosition]}`}>
        <a
          className={style.closebtn}
          onClick={() => {
            document.getElementById("drawer")!.style.width = "0em";
          }}
        >
          X
        </a>
        {returnItemsInList()}
      </div>
      <button
        className={style.openbtn}
        onClick={() => {
          document.getElementById("drawer")!.style.width = "10em";
        }}
      >
        <div className={style.btnLine}></div>
      </button>
    </div>
  );
};
