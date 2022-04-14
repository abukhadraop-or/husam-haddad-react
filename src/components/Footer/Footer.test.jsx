import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "components/Footer/Footer";
import "@testing-library/jest-dom/extend-expect";

describe('Footer' , ()=> {
  test("render  JOIN THE COMMUNITY", () => {
    render(<Footer />);
    const textTest = screen.getByText("JOIN THE COMMUNITY");
    expect(textTest).toBeInTheDocument();
  });
  
  test("render Titles", async () => {
    render(<Footer />);
    const textTest = await screen.findByText("Contribution Bible");
    expect(textTest).toBeInTheDocument();
  });




})

