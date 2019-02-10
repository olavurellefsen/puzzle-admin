import React, { useContext} from "react";
import MainContext from "../../Context";
import { PuzzleContainer, PuzzleImage } from "./Puzzle.style";

const Puzzle = props => {
  const value = useContext(MainContext);
  return (
  <PuzzleContainer>
    <PuzzleImage
      src={
        value.currentPuzzle === props.puzzleId
          ? "https://via.placeholder.com/200/000000/FFFFFF/?text=selected"
          : "https://via.placeholder.com/200?text=Puzzle"
      }
      onClick={() => {}}
    />
  </PuzzleContainer>
)};

export default Puzzle;
