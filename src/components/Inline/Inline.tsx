import React from "react";
import style from "./Inline.module.css";

export interface Props {
	children: React.ReactNode;
	variant: string;
	spacing: string;
}

export const Inline = ({ children, variant, spacing }: Props) => {
	return (
		<div
			className={`${style.inline} ${style[variant]}`}
			style={{ gap: spacing }}
		>
			{children}
		</div>
	);
};
