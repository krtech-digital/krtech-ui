import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";
import style from "./ChoiceGroup.module.css";

export interface Props {
	label: string;
	variant: string;
	name: string;
	options: string[];
}

export const ChoiceGroup = ({ label, variant, options, name }: Props) => {
	const [checkedItem, setCheckedItem] = useState(-1);
	return (
		<div>
			<p className={style.title}>{label}</p>
			<form className={style.formGrid}>
				{variant === "checkbox"
					? options.map((row: string, index: number) => {
							return <Checkbox label={row} key={index}></Checkbox>;
					  })
					: variant === "radio"
					? options.map((row: string, index: number) => {
							return (
								<RadioButton
									text={row}
									key={index}
									name={name}
									id={"id" + index}
								></RadioButton>
							);
					  })
					: new Error("variant should be 'checkbox' or 'radio'")}
			</form>
		</div>
	);
};

export default ChoiceGroup;
