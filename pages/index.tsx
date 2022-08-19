import React from "react";
import Loading from "../src/components/Loading/Loading";

const Index = () => {
	return (
		<div className="App">
			<a href="/">Homepage</a>
			<br />
			<a href="/about">Components</a>
			<br />
			<br />
			<Loading scale={1} />
		</div>
	);
};

export default Index;
