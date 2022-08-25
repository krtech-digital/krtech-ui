import React from "react";
import { Meta, Story } from "@storybook/react";
import { Switch } from "../src/components/Switch/Switch";

const meta: Meta = {
	title: "Switch",
	component: Switch,
};

export default meta;

export const Off = () => <Switch variant="off"></Switch>;

export const On = () => <Switch variant="on"></Switch>;
