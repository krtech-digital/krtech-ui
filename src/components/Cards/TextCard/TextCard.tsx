import * as React from "react";
import "./TextCard.css";

export interface TextCardProps {
  title: string;
  text: string;
}

export const TextCard = ({ title, text }: TextCardProps) => {
  return (
    <div className="text-card">
      <div className="text-card__title">{title}</div>
      <div className="text-card__text">{text}</div>
    </div>
  );
};

export default TextCard;
