import React from "react";
import { useRouter } from "next/router";
import { NavigationBar } from "../lib";

export default {
  title: "Navigation Bar",
  component: NavigationBar,
};

export function Normal (){
  const buttons = [
    {
      url: "/",
      name: "home",
      active: false,
    },
    {
      url: "/about",
      name: "about",
      active: false,
    },
  ];
 const router = useRouter();
  return (
    <div >
      <NavigationBar buttons={buttons} router={router}></NavigationBar>
    </div>
  );
};

export function Active() {
  const buttons = [
    {
      url: "/",
      name: "home",
      active: true,
    },
    {
      url: "/about",
      name: "about",
      active: false,
    },
  ];
  const router = useRouter();
  return (
    <div>
      <NavigationBar buttons={buttons} router={router}></NavigationBar>
    </div>
  );
};