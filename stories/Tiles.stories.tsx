import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tiles, Props } from "../src/components/Tiles/Tiles";

const meta: Meta = {
  title: "Tiles",
  component: Tiles,
};

export default meta;

export const VariantASingleTileWithText = () => (
  <Tiles
    variant="a"
    firstText="DOCUMENTATION"
    secondText="Read more detail information about the project"
    tileNumber={1}
  />
);

export const VariantAMultipleTilesWithText = () => (
  <Tiles
    variant="a"
    firstText="DOCUMENTATION"
    secondText="Read more detail information about the project"
    tileNumber={5}
  />
);

export const VariantBTile = () => (
  <Tiles
    variant="b"
    firstText="DOWNLOAD"
    secondText="Documentation"
    tileNumber={1}
  />
);

export const VariantBMultipleTiles = () => (
  <Tiles
    variant="b"
    firstText="DOWNLOAD"
    secondText="Documentation"
    tileNumber={3}
  />
);
