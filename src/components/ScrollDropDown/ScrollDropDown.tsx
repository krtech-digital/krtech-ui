import React from "react";
import "./ScrollDropDown.css";


const ScrollDropDown = () => {

  return (
    <div>
    <h1 className ="title">Drop Down</h1>
    <select className="box" name="selectList" id="selectList">
    <option value="option 1">Option 1</option>
    <option value="option 2">Option 2</option>
    <option value="option 3">Option 3</option>
    <option value="option 4">Option 4</option>
    <option value="option 5">Option 5</option>
    <option value="option 6">Option 6</option>
    </select>
    </div>
  );
}

export default ScrollDropDown;