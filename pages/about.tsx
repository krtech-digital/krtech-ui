import React from "react";
import { Drawer } from "../src/components/Drawer/Drawer";
const About = () => {
  return (
    <div className="App">
      <Drawer itemsList={[<></>]} popupPosition="right"></Drawer>
    </div>
  );
};

export default About;
