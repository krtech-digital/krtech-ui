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
			checked: true,
			title: 'Point 2',
			date: 'January 1, 21:00'
		},
		{
			variant: 'normal',
			checked: true,
			title: 'Point 3',
			date: 'January 1, 21:00'
		},
		{
			variant: 'normal',
			checked: false,
			title: 'Point 4',
			date: 'January 1, 21:00'
		}
	]
  return (
      <Timeline variant='vertical' points={points}></Timeline>
  );
}

export function Finish() {
	let points = [
		{
			variant: 'normal',
			checked: true,
			title: 'Point 1',
			date: 'January 1, 21:00'
		},
		{
			variant: 'normal',
			checked: true,
			title: 'Point 2',
			date: 'January 1, 21:00'
		},
		{
			variant: 'normal',
			checked: true,
			title: 'Point 3',
			date: 'January 1, 21:00'
		},
		{
			variant: 'normal',
			checked: true,
			title: 'Point 4 longer text',
			date: 'January 1, 21:00'
		},
		{
			variant: 'finish',
			checked: true,
			title: 'Finish',
			date: 'January 1, 21:00'
		}
	]
  return (
      <Timeline variant='vertical' points={points}></Timeline>
  );
}

export function Error() {
	let points = [
		{
			variant: 'normal',
			checked: true,
			title: 'Point 1',
			date: 'January 1, 21:00'
		},
		{
			variant: 'error',
			checked: true,
			title: 'Point 2',
			date: 'January 1, 21:00'
		},
		{
			variant: 'normal',
			checked: true,
			title: 'Point 3',
			date: 'January 1, 21:00'
		},
		{
			variant: 'normal',
			checked: true,
			title: 'Point 4',
			date: 'January 1, 21:00'
		}
	]
  return (
      <Timeline variant='vertical' points={points}></Timeline>
  );
}

export function Horizontal1() {
	let points = [
		{
			variant: 'normal',
			checked: true,
			title: 'Point 1'
		},
		{
			variant: 'normal',
			checked: true,
			title: 'Point 2'
		},
		{
			variant: 'normal',
			checked: false,
			title: 'Point 3'
		}
	]
  return (
      <Timeline variant='horizontal' points={points}></Timeline>
  );
}