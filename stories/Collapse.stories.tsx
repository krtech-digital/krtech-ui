import React from "react";
import { Meta, Story } from "@storybook/react";
import { Collapse, Props } from "../src/components/Collapse/Collapse";

const meta: Meta = {
	title: "Collapse",
	component: Collapse,
};
export default meta;

export const Default = () => (
	<Collapse
		title="COLLAPSE TITLE"
		text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet. Provident beatae numquam esse adipisci? Minus recusandae illo est sunt amet, libero vitae error porro similique quas neque. Ratione necessitatibus corrupti ipsa, ea dolorem alias facilis voluptates accusantium vero sint quas odio, suscipit officia a? Dolores assumenda officia placeat cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet. Provident beatae numquam esse adipisci? Minus recusandae illo est sunt amet, libero vitae error porro similique quas neque. Ratione necessitatibus corrupti ipsa, ea dolorem alias facilis voluptates accusantium vero sint quas odio, suscipit officia a? Dolores assumenda officia placeat cum!"
		width="500px"
	></Collapse>
);
