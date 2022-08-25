import React from "react";
import style from "./Loading.module.css";

export interface Props {
	scale: number;
}

export const Loading = ({ scale }: Props) => {
	return (
		<div className={style.wrapper}>
			<div className={style.loader} style={{ transform: `scale(${scale})` }}>
				<svg className={style.circularLoader} viewBox="25 25 50 50">
					<circle className={style.loaderPath} cx="50" cy="50" r="20"></circle>
				</svg>
			</div>
		</div>
	);
};
