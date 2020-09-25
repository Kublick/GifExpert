import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas GifExpertApp", () => {
	test("Debe ser igual que el snapshot", () => {
		const wrapper = shallow(<GifExpertApp />);

		expect(wrapper).toMatchSnapshot();
	});

	test("debe de mostrar una lista de categorias", () => {
		const categories = ["One Punch", "Dragon Ball"];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		console.log("que", wrapper.find("GifGrid").length);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("GifGrid").length).toBe(categories.length);
	});
});
