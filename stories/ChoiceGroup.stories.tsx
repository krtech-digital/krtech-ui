import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChoiceGroup, Props } from "../src/components/ChoiceGroup/ChoiceGroup";

const meta: Meta = {
	title: "ChoiceGroup",
	component: ChoiceGroup,
};
export default meta;

export const Checkbox = () => (
	<ChoiceGroup
		label="Checkbox group"
		variant="checkbox"
		options={["prvi", "drugi", "sesti", "osmi"]}
		name=""
	></ChoiceGroup>
);

export const Radio = () => (
	<ChoiceGroup
		label="Radio group"
		variant="radio"
		options={["prvi", "drugi", "sesti", "osmi"]}
		name="radio"
	></ChoiceGroup>
);

export const Undefined = () => (
	<ChoiceGroup
		label="Radio group"
		variant="anything"
		options={["prvi", "drugi", "sesti", "osmi"]}
		name=""
	></ChoiceGroup>
);
