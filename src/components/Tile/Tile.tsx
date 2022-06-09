import React from "react";
import "./Tile.css";

export interface ITileProps {
  title: string;
  variant: "documentation" | "download";
  details?: string;
}

export const Tile = ({ title, variant, details }: ITileProps) => {
  const titleWords = title.split(" ");
  const firstTitleWord = titleWords[0];
  const restTitleWords = titleWords.slice(1).join(" ");

  const tileActionIconSrc =
    variant === "documentation"
      ? "/images/right-arrow-icon.png"
      : "/images/download-icon.png";

  const tileActionIconAlt =
    variant === "documentation"
      ? "read documentation"
      : "download documentation";

  return (
    <div className={`kui-tile ${variant}`}>
      <div className="kui-tile__icon">
        <img src="/images/read-icon.png" />
      </div>
      <div className="kui-tile__content">
        <div className="kui-tile__title">
          <span className="kui-tile__bold-title">{`${firstTitleWord} `}</span>
          {restTitleWords}
        </div>
        {variant === "documentation" && (
          <div className="kui-tile__details">{details}</div>
        )}
      </div>
      <div className="kui-tile__action-icon">
        <img src={tileActionIconSrc} alt={tileActionIconAlt} />
      </div>
    </div>
  );
};

export default Tile;
