import React, { HTMLAttributes } from "react";
import style from "./ButtonLink.module.css";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	buttonText: string;
	variant: string;
}

export const ButtonLink = ({ buttonText, variant, ...props }: Props) => {
	return (
		<button className={`${style.buttonLink} ${style[variant]}`} {...props}>
			{buttonText}
		</button>
	);
};
