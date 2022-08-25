import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../src/components/Button/Button";

const meta: Meta = {
	title: "Button",
	component: Button,
};
export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Normal = Template.bind({});

Normal.args = {
	variant: "Default",
	text: "Button Text",
	disabled: false,
};

export const Primary = () => <Button text="Item" variant="primary"></Button>;

export const Secondary = () => (
	<Button text="Item" variant="secondary" hoverVariant="primary"></Button>
);

export const Critical = () => <Button text="Item" variant="critical"></Button>;
