import React, { TextareaHTMLAttributes } from "react";
import style from "../TextArea/TextArea.module.css";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	variant: string;
}

export const TextArea = ({ label, variant, ...props }: Props) => {
	return (
		<>
			<p className={style.label}>{label}</p>
			<textarea
				className={`${style.textArea} ${style[variant]}`}
				{...props}
			></textarea>
		</>
	);
};
