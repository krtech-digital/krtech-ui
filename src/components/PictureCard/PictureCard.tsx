import React from "react";
import "./PictureCard.css";
import Image from "next/image";

export interface PictureCardProps {
  image: string;
  alt: string;
}

function PictureCard({ image, alt }: PictureCardProps) {
  return (
    <div className="image-container">
      <Image src={image} alt={alt} layout="fill" objectFit="cover"></Image>
      <div className="image-tag">{alt}</div>
    </div>
  );
}

export default PictureCard;
