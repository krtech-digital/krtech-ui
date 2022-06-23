import React from "react";
import "./NavigationBar.css";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export interface NavProps {
  buttons: {
    url: string;
    name: string;
  }[];
  router: any;
}
function NavigationBar({ buttons, router }: NavProps) {
  // const router = useRouter();
  const [active, setActive] = useState(-1);

  const Navigate = (url: string, index: number) => {
    console.log(url, index);
    router.push(url);
    setActive(index);
  };

  return (
    <div className="navigation">
      {buttons.map((element, index) => {
        return (
          <div
            className={`buttons ${index === active ? "active" : ""}`}
            onClick={(e) => Navigate(element.url, index)}
          >
            <a>{element.name}</a>
          </div>
        );
      })}
    </div>
  );
}

export default NavigationBar;
