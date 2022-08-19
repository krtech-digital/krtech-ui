import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextCard } from "../src/components/Cards/TextCard/TextCard";

const meta: Meta = {
	title: "TextCard",
	component: TextCard,
};

export default meta;

export const Default = () => {
	return (
		<TextCard
			title="MAIN TITLE"
			text="Lorem ipsum dolor sit amet, ius cu offendit officiis reprimique. Graeco maiestatis vis cu."
		/>
	);
};
