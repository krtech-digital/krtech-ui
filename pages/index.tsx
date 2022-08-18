import { Button, Checkbox, RadioButton, Select } from "@krtech-digital/krtech-ui";
import React from "react";

const Index = () => {
	return (
		<div className="App">
			<a href="/">Homepage</a>
			<br />
			<a href="/about">Components</a>
			<br />
			<br />
			<Select
				placeholder="dropenzi downenzi"
				options={["prvi", "drugi", "treci", "u vreci"]}
			/>
		</div>
	);
};

export default Index;
