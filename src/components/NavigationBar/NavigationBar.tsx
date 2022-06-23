import React from "react";
import "./NavigationBar.css";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export interface NavProps {
  buttons: {
    url: string;
    name: string;
    active: boolean;
  }[];
  router: any;
}
function NavigationBar({ buttons, router }: NavProps) {
  // const router = useRouter();
  const [active, setActive] = useState(-1);

  const Navigate = (url: string) => {
    router.push(url);
  };

  return (
    <div className="navigation">
      {buttons.map((element) => {
        return (
          <div
            className={`buttons ${element.active ? "active" : ""}`}
            onClick={(e) => Navigate(element.url)}
          >
            <a>{element.name}</a>
          </div>
        );
      })}
    </div>
  );
}

export default NavigationBar;
