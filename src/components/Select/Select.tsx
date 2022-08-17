import React, { useState } from "react";
import style from "./Select.module.css";

export interface Props {
	placeholder: string;
	options: string[];
}

const Select = ({ placeholder, options }: Props) => {
	const [showOptions, setShowOptions] = useState(false);
	const [border, setBorder] = useState(false);
	const [value, setValue] = useState(placeholder);

	return (
		<div className={style.wrapper}>
			<div
				className={style.buttonContainer}
				onClick={() => {
					setShowOptions(!showOptions);
					setBorder(!border);
				}}
				style={{ borderColor: border ? "#195273" : "#D7D7D7" }}
			>
				<div>{value}</div>
				<img
					src={"/images/right-arrow-icon.png"}
					alt="arrow"
					style={{
						transform: showOptions ? "rotate(-90deg)" : "rotate(90deg)",
						transition: "transform 0.25s",
					}}
				/>
			</div>
			{showOptions ? (
				<div className={style.options}>
					{options.map((row: string, index: number) => {
						return (
							<div
								className={style.row}
								onClick={() => {
									setValue(row);

									setShowOptions(false);
									setBorder(false);
								}}
							>
								{row}
							</div>
						);
					})}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Select;
