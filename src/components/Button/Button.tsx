import React, { HTMLAttributes, useState } from "react";
import style from "./Button.module.css";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	text: string;
	variant: string;
	hoverVariant?: string;
	width?: string;
	height?: string;
	padding?: string;
}

export const Button = ({
	text,
	variant,
	hoverVariant = "hover",
	width,
	height,
	padding,
	...props
}: Props) => {
	const [variantStyle, setVariantStyle] = useState(variant);
	return (
		<button
			className={`${style.button} ${style[variantStyle]}`}
			style={{ width, height, padding }}
			onMouseEnter={() => {
				setVariantStyle(hoverVariant);
			}}
			onMouseLeave={() => {
				setVariantStyle(variant);
			}}
			{...props}
		>
			{text}
		</button>
	);
};
