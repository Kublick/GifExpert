const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../hooks/useFetchGifs");

describe("Pruebas en Hook useFetchGifs", () => {
	test("Debe de retornar el estaddo inicial", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs("One punch")
		);
		const { data, loading } = result.current;
		await waitForNextUpdate();
		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});
	test("debe retornar un arreglo ded imagenes y loading in false", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs("One punch")
		);

		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	});
});
