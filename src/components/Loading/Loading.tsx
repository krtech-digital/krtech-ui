import React, { FC } from "react";
import "./Loading.css";

export const Loading: FC = () => {
  return (
    <div className="loader">
      <svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px">
        <circle cx="19.5px" cy="19.5px" r="16.25" className="circle" />
      </svg>
    </div>
  );
};
