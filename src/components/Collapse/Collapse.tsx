import React from "react";
import "./Collapse.css";
import { useState } from "react";

export interface NavProps {
  title: string;
  paragraph: string;
  active: boolean;
}

function Collapse({ title, paragraph, active }: NavProps) {
  const [collaps, setCollaps] = useState(!active);

  return (
    <div className="collapse">
      <div className="text">
        <h3 className="title">{title}</h3>
        <p className={`paragraph ${collaps && "paragraph-collapsed"}`}>
          {paragraph}
        </p>
      </div>
      <div
        className={`arrow-box ${collaps ? "" : "active"}`}
        onClick={() => setCollaps(!collaps)}
      >
        <div className={`arrow ${collaps ? "down" : "up"}`}></div>
      </div>
    </div>
  );
}

export default Collapse;
