import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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
    userEvent.click(checkbox);
    expect(button).toBeEnabled();

    // Check that the button is disabled after the checkbox is unchecked
    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });

  test("popover responds to hover", async () => {
    render(<SummaryForm />);
    // popover starts hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();
    // popover appears upon mouseover for checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );

    // Makes the test more readable
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});
