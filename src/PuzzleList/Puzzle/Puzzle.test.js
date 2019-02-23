import React from "react";
import { render, cleanup } from 'test-utils';
import Puzzle from "./Puzzle";
afterEach(cleanup)

const puzzle = { id: 1, intro_audiofile: "dummyfile", character: "dummycharacer", summary: "Lorum ipsum" };
it("should render correctly", () => {
  
  const { container } = render(<Puzzle puzzle={puzzle}/>);
  expect(container).toMatchSnapshot();
});

it("should show the PuzzleContainer element", () => {
  const { queryByTestId } = render(<Puzzle puzzle={puzzle} />);
  expect(queryByTestId("PuzzleContainer")).toBeTruthy();
});