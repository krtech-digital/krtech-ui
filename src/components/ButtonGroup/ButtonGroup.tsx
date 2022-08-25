import React from "react";
import style from "./ButtonGroup.module.css";

export interface Props {
	children: React.ReactNode;
	variant: string;
}

export const ButtonGroup = ({ children, variant }: Props) => {
	return (
		<div className={`${style.buttonGroup} ${style[variant]}`}>{children}</div>
	);
};
