import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tile } from "../src/components/Tile/Tile";

const meta: Meta = {
	title: "Tile",
	component: Tile,
};

export default meta;

export const Download = () => {
	return <Tile variant="download" title="Download document" />;
};

export const ReadMore = () => {
	return (
		<Tile
			variant="documentation"
			title="Documentation"
			details="Read more detail information about the project."
		/>
	);
};
