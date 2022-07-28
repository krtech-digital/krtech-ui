import React, { useState } from "react";
import "./ScrollDropDown.css";

const ScrollDropDown = () => {
  const [dropDown, setDropdown] = useState("");

  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      <h1
        className="title"
        style={{
          display: "inline-block",
        }}
      >
        DROP DOWN
      </h1>
      <div className="dropdown">
        <div
          style={{
            position: "relative",
          }}
        >
          <button
            onClick={() => {
              setDropdown(dropDown === "block" ? "" : "block");
            }}
            className="dropbtn"
          >
            Chose the option
          </button>
          <div
            style={{ display: dropDown, position: "absolute", width: "100%" }}
            className="dropdown-content"
          >
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
            <a href="#">Option 4</a>
            <a href="#">Option 5</a>
            <a href="#">Option 6</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDropDown;
