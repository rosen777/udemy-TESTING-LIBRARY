import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("checkbox is checked by default", () => {
  render(<SummaryForm />);

  test("the checkbox is unchecked by default", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();
  });

  test("Clicking on the checkbox once enables the button. Clicking on the checkbox again disables the button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", {
      name: /confirm order/i,
    });
    // Check that the button is enabled after the checkbox is checked
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    // Check that the button is disabled after the checkbox is unchecked
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
