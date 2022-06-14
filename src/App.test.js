import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("render app", () => {
  render(<App />);
  expect(screen.getByText(/todos/i)).toBeInTheDocument();
  expect(screen.getByText("Тестовое задание")).toBeInTheDocument();
  expect(screen.getByText("Прекрасный код")).toBeInTheDocument();
  expect(screen.getByText("Покрытый тестами")).toBeInTheDocument();
});

test("input new todos", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Whats need to be done/i);
  fireEvent.change(input, {
    target: { value: "New task n2" },
  });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
  await waitFor(() => {
    expect(screen.getByText("New task n2")).toBeInTheDocument();
    expect(input.value).toBe("");
  });
});

test("clear completed todos", async () => {
  render(<App />);
  const clearButton = screen.getByTestId("clear-comleted-button");
  const allButton = screen.getByTestId("all");
  const completedButton = screen.getByTestId("comleted");

  fireEvent.click(completedButton);
  await waitFor(() => {
    expect(screen.getByText("Прекрасный код")).toBeInTheDocument();
  });

  fireEvent.click(clearButton);
  fireEvent.click(allButton);

  await waitFor(() => {
    expect(screen.getByText("Тестовое задание")).toBeInTheDocument();
    expect(screen.getByText("Прекрасный код")).toBeInTheDocument();
    expect(screen.getByText("Покрытый тестами")).toBeInTheDocument();
  });
});
