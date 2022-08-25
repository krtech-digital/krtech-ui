import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, Props } from "../src/components/Input/Input";

const meta: Meta = {
	title: "Input",
	component: Input,
};

export default meta;

export const Default = () => (
	<Input type="date" label="LABEL TEXT" placeholder="PLACEHOLDER TEXT"></Input>
);

export const EmailRequired = () => (
	<Input required type="email" placeholder="your@email.com" label="E-mail" />
);
