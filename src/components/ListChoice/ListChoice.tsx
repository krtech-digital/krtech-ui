import * as React from "react";
import "./ListChoice.css";

export const ListChoice = (props: {
	listType: string;
	listItems: string[];
}) => {
	const { listType, listItems, ...rest } = props;

	return (
		<React.Fragment>
			{listType === "numbered" && (
				<ol className="list-choice list-choice-numbered" {...rest}>
					{listItems.map((listItem) => (
						<li>{listItem}</li>
					))}
				</ol>
			)}

			{listType === "bulleted" && (
				<ul className="list-choice list-choice-bulleted" {...rest}>
					{listItems.map((listItem) => (
						<li>{listItem}</li>
					))}
				</ul>
			)}
		</React.Fragment>
	);
};
