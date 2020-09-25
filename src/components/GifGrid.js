import React from "react";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{loading && <p>Loading... </p>}
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

GifGrid.prototype = {
	category: PropTypes.string.isRequired,
};
