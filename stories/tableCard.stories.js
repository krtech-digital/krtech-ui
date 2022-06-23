import { TableCard } from "../src/components/Cards/TableCard/TableCard.tsx";

export default {
  title: "TableCard",
  component: TableCard,
};

const tableCardProps = {
  title: "Table Title",
  text: "Lorem ipsum dolor sit amet, ius cu offendit officiis reprimique. Graeco maiestatis vis cu.",
  headTitles: ["Column 1", "Column 2", "Column 3"],
  rows: [
    ["Item 2", "Item 2", "Item 2"],
    ["Item 3", "Item 3", "Item 3"],
    ["Item 4", "Item 4", "Item 4"],
  ],
};

export function Default() {
  return <TableCard {...tableCardProps} />;
}
