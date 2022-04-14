import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import DotButton from "components/DotsButton/DotButton";

describe("DotButton", () => {
  test("check if the dot button is rendered", () => {
    const mockFunction = jest.fn();
    render(<DotButton onClick={mockFunction} />);
    const buttonTest = screen.getByRole("button");
    expect(buttonTest).toBeInTheDocument();
  });

  test("click the dot button", () => {
    const mockFunction = jest.fn();
    render(<DotButton onClick={mockFunction} />);
    const buttonTest = screen.getByTestId("button");
    fireEvent.click(buttonTest);
    expect(mockFunction).toBeCalledTimes(1);
  });
});
