import * as React from "react";
import { Button } from "../Button";

import { render, screen } from "@testing-library/react";

describe("Testing Button", () => {
  it("should render properly", () => {
    render(<Button label="Hello world" />);

    screen.getByText(/hello world/i);
  });
});
