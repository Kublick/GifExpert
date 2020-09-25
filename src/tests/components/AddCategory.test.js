import { shallow } from "enzyme";
import React from "react";
import { AddCategory } from "../../components/AddCategory";

describe("pruebas en <AddCategory /> ", () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de cambiar la caja de texto", () => {
		const input = wrapper.find("input");
		const value = "Hola Mundo";
		input.simulate("change", {
			target: { value },
		});
	});
	test("no debe de postear la informacion con submit", () => {
		wrapper.find("form").simulate("submit", { preventDefault() {} });
		expect(setCategories).not.toHaveBeenCalled();
	});

	test("debe de llamar el set categories y limpiar la caja de texto", () => {
		const value = "input cambio";

		const input = wrapper.find("input");

		input.simulate("change", {
			target: { value },
		});

		wrapper.find("form").simulate("submit", { preventDefault() {} });
		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledTimes(1);

		expect(input.prop("value")).toBe("");
	});
});
