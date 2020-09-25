import React from "react";
import { shallow } from "enzyme";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas GifGrid", () => {
	const category = "One Punch";
	useFetchGifs.mockReturnValue({
		data: [],
		loading: true,
	});

	test("debe de mostrar el componente", () => {
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar items cuando carga imagenes con useFetch hook", () => {
		const gifs = [
			{
				id: "abc",
				url: "https://localhost/cualquier.jpg",
				title: "cualquiera",
			},
			{
				id: "123",
				url: "https://localhost/cualquier.jpg",
				title: "cualquiera",
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p").exists()).toBe(false);
		expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
	});
});
