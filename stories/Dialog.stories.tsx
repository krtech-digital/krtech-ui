import React from "react";
import { Meta, Story } from "@storybook/react";
import { Dialog, Props } from "../src/components/Dialog/Dialog";

const meta: Meta = {
  title: "Dialog",
  component: Dialog,
};

export default meta;

export const AVariantDialog = () => <Dialog variant="a"></Dialog>;

export const BVariantDialog = () => <Dialog variant="b"></Dialog>;
