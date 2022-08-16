import React from "react";
import style from "./HorizontalScroll.module.css";

interface Props {
	children?: React.ReactNode;
}

const HorizontalScroll = ({ children }: Props) => {
	return (
		<div
			className={style.wrapper}
			onWheel={(e) => {
				if (e.shiftKey) return;
				console.log(e);
				const delta = Math.max(
					-1,
					Math.min(1, e.nativeEvent.deltaY || -e.nativeEvent.detail)
				);
				e.currentTarget.scrollBy({
					top: 0,
					left: delta * 50,
					behavior: "smooth",
				});
				// e.currentTarget.scrollLeft += delta * 50;
				e.preventDefault();
			}}
		>
			<div className={style.container}></div>
			<div className={style.container}></div>
			<div className={style.container}></div>
		</div>
	);
};

export default HorizontalScroll;
