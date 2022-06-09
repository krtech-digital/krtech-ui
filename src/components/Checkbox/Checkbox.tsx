import * as React from "react";
import "./Checkbox.css";

export interface CheckboxProps {
  label: string;
  value?: string | number;
}

export const Checkbox = ({ label, value }: CheckboxProps) => {
  return (
    <label className="cb">
      <input type="checkbox" value={value} className="cb__box" />
      <span className="cb__label">
        <svg viewBox="0 0 100 100">
          <path
            className="path"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            d="M12.1 52.1l24.4 24.4 53-53"
          />
        </svg>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
