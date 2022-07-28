import React from "react";
import "./TimelinePoint.module.css";

function TimelinePoint(props: { [x: string]: any; variant: string; checked: boolean; title: string; date: boolean; }) {
	const { variant, checked, title, date, ...rest } = props;
	return (
		<div className={`point ${variant}`} {...rest}>
			<div className={`check ${checked ? 'checked' : ''}`}></div>
			<div className="title"><span>{title}</span></div>
			<div className="date">{date}</div>
		</div>
	);
}

export default TimelinePoint;
