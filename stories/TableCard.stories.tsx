import React from "react";
import { Meta, Story } from "@storybook/react";
import { TableCard } from "../src/components/Cards/TableCard/TableCard";

const meta: Meta = {
	title: "TableCard",
	component: TableCard,
};

export default meta;

const tableCardProps = {
	title: "Table Title",
	text: "Lorem ipsum dolor sit amet, ius cu offendit officiis reprimique. Graeco maiestatis vis cu.",
	headTitles: ["Column 1", "Column 2", "Column 3"],
	rows: [
		["Item 2", "Item 2", "Item 2"],
		["Item 3", "Item 3", "Item 3"],
		["Item 4", "Item 4", "Item 4"],
	],
};

export const Default = () => {
	return <TableCard {...tableCardProps} />;
};
