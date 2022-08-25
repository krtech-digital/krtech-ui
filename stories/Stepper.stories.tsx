import React from "react";
import { Meta, Story } from "@storybook/react";
import { Stepper, Props} from "../src/components/Stepper/Stepper";

const meta: Meta = {
    title: "Stepper",
    component: Stepper
}

export default meta;

export const Default = () =>  <Stepper minValue={0} maxValue={100}></Stepper>
