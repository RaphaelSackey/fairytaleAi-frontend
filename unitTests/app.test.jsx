import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from '../src/App';

describe("MyComponent", () => {
  it('renders a button with the text "Click me"', () => {
    render(<App />);
    // Assert that the button with text "Click me" is in the document
    expect(screen.getByTestId("regDiv")).toBeInTheDocument();
  });
});
