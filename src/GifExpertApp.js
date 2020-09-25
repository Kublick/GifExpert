import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
	//	const categories = ["One Punch", "Samurai X", "Dragon Ball"];

	const [categories, setCategories] = useState(defaultCategories);

	const handleAdd = () => {
		// setCategories([...categories, "HunterXHunter"]);
	};

	return (
		<div>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ul>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ul>
		</div>
	);
};
