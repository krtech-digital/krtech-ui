import React from "react";
import { Meta, Story } from "@storybook/react";
import Loading, { Props } from "../src/components/Loading/Loading";

const meta: Meta = {
	title: "Loading",
	component: Loading,
};
export default meta;

export const Default = () => <Loading scale={2} />;
