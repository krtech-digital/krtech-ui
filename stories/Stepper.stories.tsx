import React from "react";
import { Meta, Story } from "@storybook/react";
import { Stepper, Props } from "../src/components/Stepper/Stepper";

const meta: Meta = {
	title: "Stepper",
	component: Stepper,
};

export default meta;

export const Default = () => (
	<Stepper minValue={0} maxValue={100} initialValue={0}></Stepper>
);

export const WithMap = () => (
	<Stepper
		minValue={-1}
		maxValue={3}
		initialValue={0}
		counterMap={{
			[-1]: "minus one",
			0: "zero",
			1: "one",
			2: "two",
			3: "three",
		}}
		style={{ width: "10rem" }}
	></Stepper>
);
