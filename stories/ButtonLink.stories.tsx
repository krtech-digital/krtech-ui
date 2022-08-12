import React from "react";
import { Meta, Story } from "@storybook/react";
import { ButtonLink, Props } from "../src/components/ButtonLink/ButtonLink";

const meta: Meta = {
	title: "ButtonLink",
	component: ButtonLink,
};
export default meta;

const Template: Story<Props> = (args) => <ButtonLink {...args} />;

export const Normal = Template.bind({});

Normal.args = {
	variant: "Default",
	buttonText: "Button Text",
	disabled: false,
};

export const Primary = () => (
	<ButtonLink buttonText="Item" variant="primary"></ButtonLink>
);

export const Secondary = () => (
	<ButtonLink buttonText="Item" variant="secondary"></ButtonLink>
);

export const PrimaryHover = () => (
	<ButtonLink buttonText="Item" variant="primaryHover"></ButtonLink>
);

export const SecondaryHover = () => (
	<ButtonLink buttonText="Item" variant="secondaryHover"></ButtonLink>
);
