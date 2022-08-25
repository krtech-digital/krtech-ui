import React from "react";
import { Meta, Story } from "@storybook/react";
import { Inline, Props } from "../src/components/Inline/Inline";
import Button from "../src/components/Button/Button";

const meta: Meta = {
	title: "Inline",
	component: Inline,
};
export default meta;

export const Row = () => (
	<Inline variant="row" spacing="15px">
		<Button buttonText="button" variant="primary"></Button>
		<Button buttonText="button" variant="primary"></Button>
		<Button buttonText="button" variant="primary"></Button>
	</Inline>
);

export const Column = () => (
	<Inline variant="column" spacing="10px">
		<Button buttonText="button" variant="primary"></Button>
		<Button buttonText="button" variant="primary"></Button>
		<Button buttonText="button" variant="primary"></Button>
	</Inline>
);
