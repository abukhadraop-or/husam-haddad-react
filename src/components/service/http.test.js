import get from "components/service/http";
import "@testing-library/jest-dom/extend-expect";

describe("http", () => {
  test("get request", async () => {
    const res = "title";
    const movies = { results: res };
    const mocker = jest.fn(() => movies);
    global.fetch = jest.fn().mockResolvedValue({ json: mocker });
    const response = await get("url");
    expect(mocker).toHaveBeenCalled();
    expect(response).toEqual(res);
  });
});
