import React from "react";
import "./Timeline.css";

function Timeline(props: { [x: string]: any; variant: string; heading: string; message: string }) {
	const { variant, heading, message, ...rest } = props;
	return (
		<div className={`alertButton ${variant}`} {...rest}>
			<span className="close">&#215;</span>
			<div className="icon"></div>
			<div>
				<div className="heading">{heading}</div>
				<div className="message">{message}</div>
			</div>
		</div>
	);
}

export default Timeline;
