import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Sort from "./Sort";
import "@testing-library/jest-dom/extend-expect";

describe("Sort", () => {
  test("check if sort is rendered", () => {
    render(<Sort />);
    const sortTest = screen.getByTestId("sort");
    expect(sortTest).toBeInTheDocument();
  });

  test("check use state effect", async () => {
    render(<Sort />);
    const buttonTest = await screen.findByTestId("arrowlist");
    fireEvent.click(buttonTest);
    const selectList = screen.getByText("Sort result By");
    expect(selectList).toBeVisible();
  });

  test("check if button is disabled", () => {
    render(<Sort />);
    const buttonTest = screen.getByRole("button", { name: "Search" });
    expect(buttonTest).toBeDisabled();
  });
  
});
