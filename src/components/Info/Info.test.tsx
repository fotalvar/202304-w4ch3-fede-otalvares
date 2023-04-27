import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given a component Info,", () => {
  describe("When it receives a 'Calling' text", () => {
    test("Then it should show 'Calling'", () => {
      const expectedText = "Calling...";

      render(<Info />);

      const callStatus = screen.getByText(expectedText);

      expect(callStatus).toBeInTheDocument();
    });
  });
});
