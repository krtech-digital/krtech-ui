import { Button } from "@krtech-digital/krtech-ui";
import RadioButton from "../src/components/RadioButton/RadioButton";

import React from "react";

const Index = () => {
	return (
		<div className="App">
			<a href="/">Homepage</a>
			<br />
			<a href="/about">Components</a>
			<br />
			<br />

			<RadioButton text="uranus" checked={false} />
			<RadioButton text="mars" checked={true} />
		</div>
	);
};

export default Index;
