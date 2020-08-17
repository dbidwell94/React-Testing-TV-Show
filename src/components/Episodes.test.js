import React from "react";
import { screen, render } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episodes render correctly", async () => {
  render(<Episodes episodes={[]} />);
});
