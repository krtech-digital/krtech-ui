import React, { CSSProperties, useState } from "react";
import style from "./Collapse.module.css";

export interface Props {
	title: string;
	text: string;
	width: string;
}

export const Collapse = ({ title, text, width }: Props) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className={style.wrapper}>
			<div className={style.textDiv} style={{ maxWidth: width }}>
				<div className={style.title}>{title}</div>
				<div
					className={style.text}
					style={
						(collapsed
							? { whiteSpace: "normal" }
							: {
									textOverflow: "ellipsis",
									overflow: "hidden",
									whiteSpace: "nowrap",
							  }) as CSSProperties
					}
				>
					{text}
				</div>
			</div>
			<div className={style.imageDiv}>
				<div
					className={style.image}
					onClick={() => {
						setCollapsed(!collapsed);
					}}
				>
					<img
						src={"/images/down-arrow.svg"}
						alt="arrow"
						style={{
							transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
							transition: "transform 0.25s",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Collapse;
