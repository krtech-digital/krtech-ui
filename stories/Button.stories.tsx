import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../src/components/Button/Button";

const meta: Meta = {
    title: "Button",
    component: Button 
} 
export default meta; 



// const Template: Story<Props> = (args) => <Button {...args} />

// export const Normal = Template.bind({})

// Normal.args = {
//  variant: "Default",
//  buttonText: "Button Text",
//  disabled: false,
// }

export const Normal = () => {
    return (
        <>
        <Button buttonText="Item" variant="default"></Button>
        </>
    )
}

export const Hover = () => <Button buttonText="Item" variant="hover"></Button>

export const Active = () => <Button buttonText="Item" variant="active"></Button>

