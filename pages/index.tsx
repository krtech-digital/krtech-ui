import { Button } from "@krtech-digital/krtech-ui";
import HorizontalScroll from "../src/components/HorizontalScroll/HorizontalScroll";

import React from "react";

const Index = () => {
	return (
		<div className="App">
			<a href="/">Homepage</a>
			<br />
			<a href="/about">Components</a>
			<br />
			<br />

			<HorizontalScroll />
		</div>
	);
};

export default Index;
