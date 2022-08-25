import React, { useState } from "react";
import style from "./RadioButton.module.css";

export interface Props {
	text: string;
	name: string;
	id?: string;
}

export const RadioButton = ({ text, name, id }: Props) => {
	return (
		<div className={style.radio}>
			<input type="radio" name={name} id={id === undefined ? undefined : id} />
			<label htmlFor={id === undefined ? undefined : id}>{text}</label>
		</div>
	);
};
