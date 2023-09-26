import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders return to top", () => {
  render(<App />);
  const soughtElement = screen.getByText("Tropical Paradise");
  expect(soughtElement).toBeInTheDocument();
});
