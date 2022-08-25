import React from "react";
import { Meta, Story } from "@storybook/react";
import { ListChoice } from "../src/components/ListChoice/ListChoice";

const meta: Meta = {
	title: "ListChoice",
	component: ListChoice,
};

export default meta;

export const Bulleted = () => {
	return (
		<ListChoice
			listType="bulleted"
			listItems={["About", "Contact", "Register", "Learn"]}
		/>
	);
};

export const Numbered = () => {
	return (
		<ListChoice
			listType="numbered"
			listItems={["About", "Contact", "Register", "Learn"]}
		/>
	);
};
