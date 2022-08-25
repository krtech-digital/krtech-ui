import React from "react";
import { Meta, Story } from "@storybook/react";
import { ButtonGroup, Props } from "../src/components/ButtonGroup/ButtonGroup";
import Button from "../src/components/Button/Button";

const meta: Meta = {
	title: "ButtonGroup",
	component: ButtonGroup,
};
export default meta;

const Template: Story<Props> = (args) => <ButtonGroup {...args} />;

export const Row = () => (
	<ButtonGroup variant="row">
		<Button buttonText="button" variant="primary"></Button>
		<Button buttonText="button" variant="primary"></Button>
		<Button buttonText="button" variant="primary"></Button>
	</ButtonGroup>
);

export const Column = () => (
	<ButtonGroup variant="column">
		<Button buttonText="button" variant="primary"></Button>
		<Button buttonText="button" variant="primary"></Button>
		<Button buttonText="button" variant="primary"></Button>
	</ButtonGroup>
);
