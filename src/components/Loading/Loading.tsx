import React, { FC } from "react";
import "./Loading.css";

interface Props {
  variant: string;
}

export const Loading: FC<Props> = ({ variant }) => {
  return <div id={variant}></div>;
};
