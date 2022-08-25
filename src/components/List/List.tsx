import * as React from "react";
import style from "./List.module.css";

export interface Props {
  listType: string;
  listItems: string[];
}

export const List = ({ listType, listItems }: Props) => {
  return (
    <>
      {listType == "unordered" && (
        <ul className={style.bullet}>
          {listItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      )}
      {listType == "ordered" && (
        <ol className={style.number}>
          {listItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      )}
    </>
  );
};

export default List;
