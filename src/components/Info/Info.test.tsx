import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given a component Info,", () => {
  describe("When it receives a call value of true", () => {
    test("Then it should show a 'Calling' message", () => {
      const expectedText = "Calling...";

      render(<Info />);

      const callStatus = screen.getByText(expectedText);

      expect(callStatus).not.toBeVisible();
    });
  });
});
