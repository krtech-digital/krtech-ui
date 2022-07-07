import React from "react";
import "../Timeline/Timeline.module.css";
import TimelinePoint from "./TimelinePoint";

function Timeline(props: { [x: string]: any; variant: string; points: any[]; }) {
	const { variant, points, ...rest } = props;
	return (
		<div className={`timeline ${variant}`} {...rest}>
			{
				points.map((point) => (
					<TimelinePoint variant={point.variant} checked={point.checked} title={point.title} date={point.date} />
				))
			}
		</div>
	);
}

export default Timeline;
