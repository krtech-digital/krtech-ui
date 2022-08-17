import { Button } from "@krtech-digital/krtech-ui";
import RadioButton from "../src/components/RadioButton/RadioButton";
import Select from "../src/components/Select/Select";

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
				name="selekt"
				id="selekt"
				placeholder="drop down"
				options={["prvi", "drugi", "treci", "u vreci"]}
			/>
		</div>
	);
};

export default Index;
