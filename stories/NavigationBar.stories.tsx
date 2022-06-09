import React from "react";
import { Meta, Story } from "@storybook/react";
import { NavigationBar } from "../src/components/NavigationBar/NavigationBar"

const meta: Meta = {
    title: "Navigation Bar",
    component: NavigationBar
}

export default meta;

export const Prototype = () => <NavigationBar></NavigationBar>