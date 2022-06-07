import React from "react"
import Button from "../src/components/Button/Button"



export default{
    title: "Form/Button",
    component: Button,
    args: {
        children: "Button"
    }

}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>


// Bolje koristiti dok je komponenta sa više stateova. 

const Template = args => <Button {...args}> </Button>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: "primary",
    // children: "Primary Args"
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    // children: "Long Primary Args"
}

export const SecondaryA = Template.bind({})
    SecondaryA.args = {
        variant: "Secondary",
        // children: "Secondary Args"
    }