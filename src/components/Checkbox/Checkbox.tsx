import * as React from "react";
import "./Checkbox.css";

export interface Props {
	label: string;
	checked?: boolean;
}

export const Checkbox = ({ label, checked }: Props) => {
	const [check, setCheck] = React.useState(checked ? checked : false);
	return (
		<label className="cb">
			<input
				type="checkbox"
				checked={check}
				className="cb__box"
				onChange={() => {
					setCheck(!check);
				}}
			/>
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
