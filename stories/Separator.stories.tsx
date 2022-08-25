import React from "react";
import { Meta, Story } from "@storybook/react";
import { Separator, Props} from "../src/components/Separator/Separator";

const meta: Meta = {
    title: "Separator",
    component: Separator
}

export default meta;

export const TypeA = () => 
<Separator
variant="a"
firstText="Text Placeholder"
secondText="TextPlaceholder"
thirdText="TextPlaceholder"
fourthText="TextPlaceholder"
 />

 export const TypeB = () => 
<Separator
variant="b"
firstText="Text Placeholder"
secondText="TextPlaceholder"
thirdText="TextPlaceholder"
fourthText="TextPlaceholder"
 />

 export const TypeC = () => 
 <Separator
 variant="c"
 firstText="Text Placeholder"
 secondText="TextPlaceholder"
 thirdText="TextPlaceholder"
 fourthText="TextPlaceholder"
  />