import React, { InputHTMLAttributes } from "react";
import style from "../WhiteButton/WhiteButton.module.css";

export interface Props {
	variant: string;
}

export const WhiteButton = ({ variant }: Props) => {
	return (
		<div className={style.whiteButtonBox}>
			<div className={style.text}>
				{
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mauris augue, ullamcorper et arcu a, tempus iaculis nulla. Quisque egestas viverra ipsum, eget rutrum velit dignissim vitae."
				}
			</div>
			<button className={variant === "default" ? style.active : style.hover}>
				{"I Understand"}
			</button>
		</div>
	);
};
