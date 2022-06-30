import React from "react";
import style from "./Timeline.module.css";

function TimelinePoint(props: { [x: string]: any; variant: string; checked: boolean; title: string; date: boolean; }) {
	const { variant, checked, title, date, ...rest } = props;
	return (
		<div className={`point ${variant}`} {...rest}>
			<span className={`check ${checked ? 'checked' : ''}`}>&#10003;</span>
			<div className="title">{title}</div>
			<div className="date">{date}</div>
		</div>
	);
}

export default TimelinePoint;
