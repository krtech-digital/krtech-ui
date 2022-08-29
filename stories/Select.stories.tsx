import React from "react";
import { Meta, Story } from "@storybook/react";
import { Select } from "../src/components/Select/Select";

const meta: Meta = {
	title: "Select",
	component: Select,
};
export default meta;

export const Default = () => {
	return (
		<Select
			placeholder="This is a drop down select box"
			options={["Option 1", "Option 2", "Option 3"]}
			width="800px"
		/>
	);
};
