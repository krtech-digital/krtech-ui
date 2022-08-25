import React from "react";
import { Meta, Story } from "@storybook/react";
import { FileUpload } from "../src/components/FileUpload/FileUpload";

const meta: Meta = {
	title: "FileUpload",
	component: FileUpload,
};

export default meta;

export const Default = () => {
	return <FileUpload />;
};
