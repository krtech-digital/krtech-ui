import React from "react";
import { Meta, Story } from "@storybook/react";
import { Checkbox, Props } from "../src/components/Checkbox/Checkbox";

const meta: Meta = {
	title: "Checkbox",
	component: Checkbox,
};
export default meta;

export const Checked = () => (
	<Checkbox label={"Check this out"} checked={true}></Checkbox>
);

export const Unchecked = () => (
	<Checkbox label={"Check this out"} checked={false}></Checkbox>
);
