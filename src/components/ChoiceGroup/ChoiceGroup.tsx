import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";
import style from "./ChoiceGroup.module.css";

export interface Props {
	label: string;
	variant: string;
	options: string[];
}

export const ChoiceGroup = ({ label, variant, options }: Props) => {
	return (
		<div>
			<p className={style.title}>
				{variant === "checkbox"
					? options.map((row: string, index: number) => {
							return <Checkbox label={row} key={index}></Checkbox>;
					  })
					: variant === "radio"
					? options.map((row: string, index: number) => {
							return <RadioButton></RadioButton>; // Need to merge radio button fix before this can work
					  })
					: new Error("variant should be 'checkbox' or 'radio'")}
			</p>
		</div>
	);
};

export default ChoiceGroup;
