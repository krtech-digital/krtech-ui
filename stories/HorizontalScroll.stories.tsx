import React from "react";
import { Meta, Story } from "@storybook/react";
import HorizontalScroll from "../src/components/HorizontalScroll/HorizontalScroll";

const meta: Meta = {
	title: "HorizontalScroll",
	component: HorizontalScroll,
};

export default meta;

export const Default = () => <HorizontalScroll></HorizontalScroll>;

export const Itemized = () => (
	<HorizontalScroll items={true}></HorizontalScroll>
);
