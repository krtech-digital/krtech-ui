import React from "react";
import style from "./Select.module.css";

interface Props {
	name: string;
	id: string;
	placeholder: string;
	options: string[];
}

const Select = ({ name, id, placeholder, options }: Props) => {
	return (
		<select
			name={name}
			id={id}
			placeholder={placeholder}
			className={style.selectBox}
		>
			<option disabled={true} style={{ display: "none" }} value={placeholder}>
				{placeholder}
			</option>
			{options.map((row: string, index: number) => {
				console.log(row, index);
				return (
					<option key={index} value={index} className={style.row}>
						{row}
					</option>
				);
			})}
		</select>
	);
};

export default Select;
