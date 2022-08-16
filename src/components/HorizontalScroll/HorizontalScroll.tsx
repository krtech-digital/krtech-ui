import React from "react";
import style from "./HorizontalScroll.module.css";

interface Props {
	children?: React.ReactNode;
	items?: boolean;
}

// children should be 300px width

const HorizontalScroll = ({ children, items = false }: Props) => {
	return (
		<div
			className={style.wrapper}
			onWheel={(e) => {
				if (e.shiftKey) return;
				const delta = Math.max(
					-1,
					Math.min(1, e.nativeEvent.deltaY || -e.nativeEvent.detail)
				);

				if (e.currentTarget.scrollLeft % 270 != 0) return; // Prevent re-scrolling while scroll is happening

				e.currentTarget.scrollBy({
					top: 0,
					left: delta * 270,
					behavior: "smooth",
				});
				console.log(e.currentTarget.scrollLeft);

				// e.currentTarget.scrollLeft += delta * 50;
			}}
		>
			{items ? (
				<>
					<div className={style.container}>
						<div className={style.containerTop}></div>
						<div className={style.containerBottom}></div>
					</div>
					<div className={style.container}>
						<div className={style.containerTop}></div>
						<div className={style.containerBottom}></div>
					</div>
					<div className={style.container}>
						<div className={style.containerTop}></div>
						<div className={style.containerBottom}></div>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default HorizontalScroll;
