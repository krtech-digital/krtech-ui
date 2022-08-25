import React from "react";
import { Meta, Story } from "@storybook/react";
import { Drawer, Props } from "../src/components/Drawer/Drawer";
import { Button } from "../src/components/Button/Button";

const meta: Meta = {
  title: "Drawer",
  component: Drawer,
};

export default meta;

export const LeftSide = () => (
  <Drawer
    popupPosition="left"
    itemsList={[
      <Button
        style={{ width: "100%" }}
        variant="primary"
        hoverVariant="secondary"
        text="Item1"
      />,
      <Button
        style={{ width: "100%" }}
        variant="primary"
        hoverVariant="secondary"
        text="Item2"
      />,
    ]}
  ></Drawer>
);

export const RightSide = () => (
  <Drawer
    popupPosition="right"
    itemsList={[
      <Button
        style={{ width: "100%" }}
        variant="primary"
        hoverVariant="secondary"
        text="Item1"
      />,
      <Button
        style={{ width: "100%" }}
        variant="primary"
        hoverVariant="secondary"
        text="Item2"
      />,
    ]}
  ></Drawer>
);
