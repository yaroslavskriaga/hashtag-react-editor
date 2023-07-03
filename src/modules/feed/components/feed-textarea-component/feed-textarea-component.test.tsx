import React from "react";
import { createEvent, fireEvent, render } from "@testing-library/react";
import { FeedTextareaComponent } from "./feed-textarea-component";
import { screen } from "@testing-library/react";

describe("FeedTextareaComponent", () => {
  const setIsSendingAvailable = jest.fn();
  const setTextLength = jest.fn();
  const { getByTestId } = render(<FeedTextareaComponent setIsSendingAvailable={setIsSendingAvailable} setTextLength={setTextLength} />);
  const editor = getByTestId("feed-editor");

  test("FeedTextareaComponent is rendered", () => {
    expect(editor).toBeInTheDocument();
  });

  test("Update editor state on text change", () => {
    const event = createEvent.paste(editor, {
      clipboardData: {
        types: ["text/plain"],
        getData: () => "test",
      },
    });

    fireEvent(editor, event);
  });

  test("Display dropdown suggestions on hashtag input", () => {
    const { getByTestId } = render(<FeedTextareaComponent setIsSendingAvailable={setIsSendingAvailable} setTextLength={setTextLength} />);
    const editor = getByTestId("feed-editor");

    const event = createEvent.paste(editor, {
      clipboardData: {
        types: ["text/plain"],
        getData: () => "#test",
      },
    });

    fireEvent(editor, event);

    const suggestions = screen.getByTestId("feed-suggestions");
    expect(suggestions).toBeInTheDocument();
  });

  test("Handles click on suggestion item", () => {
    const { getByTestId } = render(<FeedTextareaComponent setIsSendingAvailable={setIsSendingAvailable} setTextLength={setTextLength} />);
    const editor = getByTestId("feed-editor");
    const event = createEvent.paste(editor, {
      clipboardData: {
        types: ["text/plain"],
        getData: () => "#test",
      },
    });

    fireEvent(editor, event);

    const suggestions = screen.getByTestId("feed-suggestions");
    fireEvent.click(suggestions);
  });
});
