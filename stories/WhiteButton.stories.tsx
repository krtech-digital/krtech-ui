import React from "react";
import { Meta, Story } from "@storybook/react";
import { WhiteButton, Props } from "../src/components/WhiteButton/WhiteButton";

const meta: Meta = {
    title: "White Button",
    component: WhiteButton
}

export default meta;

export const Default = () => <WhiteButton variant="default"></WhiteButton>

export const Hover = () => <WhiteButton variant="hover"></WhiteButton>