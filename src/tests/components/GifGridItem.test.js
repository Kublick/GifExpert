import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas <GriddItem />", () => {
	const title = "El Titulo";
	const url = "https://localhost/algo.jpg";
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test("debe de mostra el componente correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de tener un parrafo con el texto", () => {
		const p = wrapper.find("p");

		expect(p.text().trim()).toBe(title);
	});
	test("debe de tener la imagen igual al url y alt de los props", () => {
		const img = wrapper.find("img");

		//console.log(img.prop("src"));
		expect(img.prop("src")).toBe(url);
		expect(img.prop("alt")).toBe(title);
	});

	test("debe tener animate ", () => {
		const div = wrapper.find("div");

		const className = div.prop("className");

		// expect(div.prop("className")).toBe(
		// 	"card animate__animated animate__fadeIn"
		// );

		expect(className.includes("animate__fadeIn")).toBe(true);
	});
});
