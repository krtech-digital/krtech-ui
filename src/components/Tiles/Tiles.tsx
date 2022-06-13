import React from "react";
import style from "../Tiles/Tiles.module.css";

export interface Props {
  tileNumber: number;
  variant: string;
  firstText: string;
  secondText: string;
}

export const Tiles = ({
  tileNumber,
  variant,
  firstText,
  secondText,
}: Props) => {
  function TileWithText() {
    return (
      <div className={style.tileContainerS}>
        <div className={style.iLeft}></div>
        <div className={style.header}>{firstText}</div>
        <div className={style.dtext}>{secondText}</div>
        <div className={style.iRight}></div>
      </div>
    );
  }

  function TileOnlyHeader() {
    return (
      <div className={style.tileContainerH}>
        <div className={style.iLeftH}></div>
        <div className={style.headerB1}>{firstText}</div>
        <div className={style.headerB2}>{secondText}</div>
        <div className={style.iDownload}></div>
      </div>
    );
  }

  function returnTiles(): JSX.Element[] {
    let tilesArray = [];

    for (let index = 0; index < tileNumber; index++) {
      if (variant === "a") {
        tilesArray.push(TileWithText());
      } else if (variant === "b") {
        tilesArray.push(TileOnlyHeader());
      }
    }
    return tilesArray;
  }

  return <>{returnTiles()}</>;
};
