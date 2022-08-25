import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextArea, Props } from "../src/components/TextArea/TextArea";

const meta: Meta = {
	title: "Text Area",
	component: TextArea,
};

export default meta;

export const Default = () => (
	<TextArea
		label="LABEL TEXT"
		placeholder="PLACEHOLDER TEXT"
		variant="normal"
	/>
);

export const Hover = () => (
	<TextArea label="LABEL TEXT" placeholder="PLACEHOLDER TEXT" variant="hover" />
);
