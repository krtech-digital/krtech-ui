import React from "react";
import { Meta, Story } from "@storybook/react";
import Toast from "../src/components/Toast/Toast";

const meta: Meta = {
  title: "Toast",
  component: Toast,
};

export default meta;

export const Text = () => <Toast toastText="This is your message!"></Toast>;

export const Link = () => (
  <Toast toastText="This is your link!" href="#"></Toast>
);
