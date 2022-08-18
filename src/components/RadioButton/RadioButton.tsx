import React from "react";
import style from "./RadioButton.module.css";

export interface Props {
	text: string;
	checked: boolean;
}

const RadioButton = ({ text, checked }: Props) => {
	return (
		<div className={style.radio}>
			<input type="radio" checked={checked} />
			<label>{text}</label>
		</div>
	);
};

export default RadioButton;
