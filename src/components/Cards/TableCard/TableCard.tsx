import * as React from "react";
import "./TableCard.css";

export type TableCardRowType = string[];
export interface TableCardProps {
  title: string;
  text: string;
  headTitles: string[];
  rows: TableCardRowType[];
}

export const TableCard = ({
  title,
  text,
  headTitles,
  rows,
}: TableCardProps) => {
  return (
    <div className="table-card">
      <div className="table-card__description">
        <div className="table-card__title">{title}</div>
        <div className="table-card__text">{text}</div>
      </div>
      <div className="table-card__content">
        <div className="table-card__header">
          {renderTableCardHeader(headTitles)}
        </div>
        <div className="table-card__body">{renderTableCardRows(rows)}</div>
      </div>
    </div>
  );
};

// Utility component
const TableCardRow = ({ row }: { row: TableCardRowType }) => (
  <div className="table-card__row">
    {row.map((item) => (
      <div className="table-card__cell">{item}</div>
    ))}
  </div>
);

function renderTableCardHeader(headTitles: string[]): JSX.Element {
  return (
    <>
      {headTitles.map((title) => (
        <div className="table-card__cell">{title}</div>
      ))}
    </>
  );
}

function renderTableCardRows(rows: TableCardRowType[]) {
  return (
    <>
      {rows.map((row: TableCardRowType, i: number) => (
        <TableCardRow key={i} row={row} />
      ))}
      {/* empty last row */}
      <div className="table-card__row table-card__empty-row">
        {rows[0].map((cell: string, i: number) => (
          <div className="table-card__cell">&nbsp;</div>
        ))}
      </div>
    </>
  );
}

export default TableCard;
