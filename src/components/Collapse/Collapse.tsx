import React from "react";
import style from "./Collapse.module.css";

export interface Props {
	title: string;
	text: string;
}

export const Collapse = ({ title, text }: Props) => {
	return (
		<div className={style.wrapper}>
			<div>
				<div className={style.title}>{title}</div>
				<div className={style.text}>{text}</div>
			</div>
			<div>
				<div className={style.icon}></div>
			</div>
		</div>
	);
};

export default Collapse;
