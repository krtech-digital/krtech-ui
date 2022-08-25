import React from "react";
import { Meta, Story } from "@storybook/react";
import { Drawer, Props } from "../src/components/Drawer/Drawer";

const meta: Meta = {
  title: "Drawer",
  component: Drawer,
};

export default meta;

export const LeftSide = () => (
  <Drawer
    popupPosition="left"
    itemsList={["Item1", "Item2", "Item3", "Item4"]}
  ></Drawer>
);

export const RightSide = () => (
  <Drawer
    popupPosition="right"
    itemsList={["Item1", "Item2", "Item3", "Item4"]}
  ></Drawer>
);
