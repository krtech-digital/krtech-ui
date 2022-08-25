import React from "react";
import Switch from "../src/components/Switch/Switch";
import { Button } from "../src/components/Button/Button";
import { Input } from "../src/components/Input/Input";

const Index = () => {
	return (
		<div className="App">
			<a href="/">Homepage</a>
			<br />
			<a href="/about">Components</a>
			<br />
			<br />
			<Input type="date" label={"krac"} />
		</div>
	);
};

export default Index;
