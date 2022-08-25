import React from "react";
import style from "./Header.module.css";

export interface Props {
	variant: number;
	text: string;
}

export const Header = ({ variant, text }: Props) => {
	if (variant === 1) return <h1 className={style.h1}>{text}</h1>;
	else if (variant === 2) return <h2>{text}</h2>;
	else if (variant === 3) return <h3>{text}</h3>;
	else if (variant === 4) return <h4>{text}</h4>;
	else if (variant === 5) return <h5>{text}</h5>;
	else return <h6>{text}</h6>;
};
