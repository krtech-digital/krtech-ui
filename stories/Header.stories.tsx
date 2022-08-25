import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header } from "../src/components/Header/Header";

const meta: Meta = {
	title: "Header",
	component: Header,
};

export default meta;

export const H1 = () => <Header variant={1} text={"Header"}></Header>;
export const H2 = () => <Header variant={2} text={"Header"}></Header>;
export const H3 = () => <Header variant={3} text={"Header"}></Header>;
export const H4 = () => <Header variant={4} text={"Header"}></Header>;
export const H5 = () => <Header variant={5} text={"Header"}></Header>;
export const H6 = () => <Header variant={6} text={"Header"}></Header>;
