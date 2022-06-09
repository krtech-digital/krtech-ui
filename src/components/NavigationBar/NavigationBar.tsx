import React from "react";
import "./NavigationBar.css";

export interface NavProps{
    buttons:
       {
      url: string;
      name: string;
        }[]
}
function NavigationBar({buttons}:NavProps) {

  return <div className="buttons">{buttons[0].url}</div>;
}

export default NavigationBar;