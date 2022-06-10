import { Tile } from "../src/components/Tile/Tile.tsx";

export default {
  title: "Tile",
  component: Tile,
};

export function Download() {
  return <Tile variant="download" title="Download document" />;
}

export function ReadMore() {
  return (
    <Tile
      variant="documentation"
      title="Documentation"
      details="Read more detail information about the project."
    />
  );
}
