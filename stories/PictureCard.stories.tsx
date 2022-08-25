import React from "react";
import { Meta, Story } from "@storybook/react";
import { PictureCard, Props } from "../src/components/PictureCard/PictureCard";

const meta: Meta = {
	title: "PictureCard",
	component: PictureCard,
};
export default meta;

export const Default = () => (
	<PictureCard image="/images/Img2.png" alt="Mountain"></PictureCard>
);
