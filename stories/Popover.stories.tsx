import React from "react";
import { Meta, Story } from "@storybook/react";
import { Popover } from "../src/components/Popover/Popover";
import { Dialog } from "../src/components/Dialog/Dialog";

const meta: Meta = {
  title: "Popover",
  component: Popover,
};

export default meta;

export const Default = () => (
  <Popover popupContent={<Dialog variant="a"></Dialog>}></Popover>
);
