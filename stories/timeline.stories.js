import React from "react";
import Timeline from "../src/components/Timeline/Timeline.tsx";

export default {
  title: "Timeline",
  component: Timeline,
};

export function Vertical1() {
	let points = [
		{
			variant: 'normal',
			checked: true,
			title: 'Point 1',
			date: 'January 1, 21:00'
		},
		{
			variant: 'normal',
			checked: false,
			title: 'Point 2',
			date: 'January 1, 21:00'
		}
	]
  return (
      <Timeline variant='vertical' points={points}></Timeline>
  );
}