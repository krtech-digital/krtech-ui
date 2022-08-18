import { Button, Checkbox } from "@krtech-digital/krtech-ui";
import { Select } from "../src/components/Select/Select";
import React from "react";
import Collapse from "../src/components/Collapse/Collapse";

const Index = () => {
	return (
		<div className="App">
			<a href="/">Homepage</a>
			<br />
			<a href="/about">Components</a>
			<br />
			<br />
			<Collapse
				title="COLLAPSE TITLE"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet. Provident beatae numquam esse adipisci? Minus recusandae illo est sunt amet, libero vitae error porro similique quas neque. Ratione necessitatibus corrupti ipsa, ea dolorem alias facilis voluptates accusantium vero sint quas odio, suscipit officia a? Dolores assumenda officia placeat cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet. Provident beatae numquam esse adipisci? Minus recusandae illo est sunt amet, libero vitae error porro similique quas neque. Ratione necessitatibus corrupti ipsa, ea dolorem alias facilis voluptates accusantium vero sint quas odio, suscipit officia a? Dolores assumenda officia placeat cum!"
				width="50%"
			></Collapse>
		</div>
	);
};

export default Index;
