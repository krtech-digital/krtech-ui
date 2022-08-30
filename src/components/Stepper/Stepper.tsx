import React, { InputHTMLAttributes, useState } from "react";
import style from "../Stepper/Stepper.module.css";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	minValue: number;
	maxValue: number;
	initialValue: number;
	counterMap?: Record<number, string>;
}

export const Stepper = ({
	minValue,
	maxValue,
	initialValue = minValue,
	counterMap = undefined,
	...props
}: Props) => {
	if (initialValue > maxValue) initialValue = maxValue;
	if (initialValue < minValue) initialValue = minValue;

	const [counter, setCounter] = useState(initialValue);

	function min() {
		if (counter <= minValue) {
			setCounter(maxValue);
		}
	}

	function max() {
		if (counter >= maxValue) {
			setCounter(minValue);
		}
	}

	return (
		<div className={style.stepperBox}>
			<button
				onClick={() => {
					setCounter(counter - 1);
					min();
				}}
				className={style.minus}
			>
				{"-"}
			</button>
			<div className={style.counter} {...props}>
				{counterMap === undefined ? counter : counterMap[counter]}
			</div>
			<button
				onClick={() => {
					setCounter(counter + 1);
					max();
				}}
				className={style.plus}
			>
				{"+"}
			</button>
		</div>
	);
};
