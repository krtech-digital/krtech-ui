import React from "react";
import "./PictureCard.module.css";
import Image from "next/image";
import style from "./PictureCard.module.css";

export interface Props {
	image: string;
	alt: string;
}

export const PictureCard = ({ image, alt }: Props) => {
	return (
		<div className={style.imageContainer}>
			<Image
				loader={() => image}
				src={image}
				alt={alt}
				layout="fill"
				objectFit="cover"
			></Image>
			<div className={style.imageTag}>{alt}</div>
		</div>
	);
};

export default PictureCard;
