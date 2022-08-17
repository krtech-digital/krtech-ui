import { Button } from "@krtech-digital/krtech-ui";
import RadioButton from "../src/components/RadioButton/RadioButton";
import Select from "../src/components/Select/Select";

import React from "react";
import PictureCard from "../src/components/PictureCard/PictureCard";

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
