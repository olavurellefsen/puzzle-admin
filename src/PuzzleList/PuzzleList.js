import React, { useContext } from "react";
import MainContext from "../Context";
import Puzzle from "./Puzzle/Puzzle";
import { PuzzleListContainer, PuzzleListBox } from "./PuzzleList.style";
import puzzleData from "./PuzzleData";

export default function PuzzleList() {
  const puzzles = puzzleData.data.puzzle;
  const [state, dispatch] = useContext(MainContext);
  let currentPuzzleId = 0;
  return (
    <PuzzleListContainer>
      <PuzzleListBox>
        {puzzles
          .filter(puzzle => puzzle.scene_id === state.currentScene)
          .map((puzzle, index) => {
            if (currentPuzzleId === 0) {
              currentPuzzleId = getCurrentPuzzleId(
                state,
                dispatch,
                puzzle.id,
                state.currentScene
              );
            }
            return (
              <Puzzle
                key={index}
                puzzle={puzzle}
                currentPuzzleId={currentPuzzleId}
              />
            );
          })}
      </PuzzleListBox>
    </PuzzleListContainer>
  );
}

const getCurrentPuzzleId = (state, dispatch, id, scene_id) => {
  let currentPuzzle = state.currentPuzzles.filter(
    p => p.scene_id === state.currentScene
  );
  if (currentPuzzle.length > 0) {
    return currentPuzzle[0].puzzle_id;
  } else {
    // No puzzle selected for the current scene, so set the current one as the selected puzzle
    dispatch({ type: "setCurrentPuzzle", puzzle_id: id, scene_id: scene_id });
    return id;
  }
};
