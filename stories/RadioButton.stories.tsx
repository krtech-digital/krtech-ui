import React from "react";
import { Meta, Story } from "@storybook/react";
import RadioButton from "../src/components/RadioButton/RadioButton";

const meta: Meta = {
	title: "RadioButton",
	component: RadioButton,
};
export default meta;

export const Unchecked = () => {
	return <RadioButton text="radio" checked={false} />;
};

export const Checked = () => {
	return <RadioButton text="radio" checked={true} />;
};
