import React from "react";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import Select from "components/UI/Select/Select";
import "@testing-library/jest-dom/extend-expect";

describe("Select", () => {
  test("check if component is render", () => {
    const mockedFun = jest.fn();
    render(<Select onChange={mockedFun} />);
    const textTest = screen.getByText("Sort result By");
    expect(textTest).toBeVisible();
  });

  test("Simulates selection", () => {
    const mockedFun = jest.fn();
    render(<Select onChange={mockedFun} />);
    const options = screen.getAllByTestId("select-option");
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "vote_average.desc" },
    });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
  });
});
