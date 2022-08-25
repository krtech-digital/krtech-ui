import React from "react";
import PictureCard from "../src/components/PictureCard/PictureCard";
import { Button } from "../src/components/Button/Button";

const Index = () => {
	return (
		<div className="App">
			<a href="/">Homepage</a>
			<br />
			<a href="/about">Components</a>
			<br />
			<br />
			<PictureCard image="/images/Img2.png" alt="Mountain"></PictureCard>
		</div>
	);
};

export default Index;
