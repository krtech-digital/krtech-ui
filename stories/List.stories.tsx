import React from "react";
import { Meta } from "@storybook/react";
import List from "../src/components/List/List";

const meta: Meta = {
  title: "List",
  component: List,
};

export default meta;

export const Ordered = () => (
  <List
    listType="ordered"
    listItems={["About", "Contact", "Register", "Learn"]}
  ></List>
);
export const Unordered = () => (
  <List
    listType="unordered"
    listItems={["About", "Contact", "Register", "Learn"]}
  ></List>
);
