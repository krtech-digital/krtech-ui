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
		<div
			className={style.wrapper}
			onBlur={() => {
				setShowOptions(false);
				setBorder(false);
			}}
			tabIndex={0}
		>
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
					src={"/images/down-arrow.svg"}
					alt="arrow"
					style={{
						transform: showOptions
							? "rotate(180deg) scale(2)"
							: "rotate(0deg) scale(2)",
						transition: "transform 0.25s",
					}}
				/>
			</div>
			{showOptions ? (
				<div className={style.options}>
					{options.map((row: string, index: number) => {
						return (
							<div
								key={index}
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
