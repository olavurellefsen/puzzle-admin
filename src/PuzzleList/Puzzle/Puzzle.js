import React, { useContext } from "react";
import MainContext from "../../Context";
import {
  PuzzleContainer,
  PuzzleFields,
  PuzzleFieldCaption,
  PuzzleField
} from "./Puzzle.style";

export default function Puzzle(props) {
  const [state, dispatch] = useContext(MainContext);
  let { id, scene_id,  puzzle_identifier, intro_audiofile, intro_text_id, character, summary, sequence} = props.puzzle;
  const selected = state.currentPuzzle === id;
  return (
    <PuzzleContainer
      onClick={() => {
        dispatch({ type: "setCurrentPuzzle", number: id });
      }}
      selected={selected}
    >
      <PuzzleFields>
        <PuzzleFieldCaption>PUZZLE {id}</PuzzleFieldCaption>
        <PuzzleField>{summary}</PuzzleField>
        <PuzzleFieldCaption>AUDIOFILE</PuzzleFieldCaption>
        <PuzzleField>{intro_audiofile}</PuzzleField>
        <PuzzleFieldCaption>CHARACTER</PuzzleFieldCaption>
        <PuzzleField>{character}</PuzzleField>
      </PuzzleFields>
    </PuzzleContainer>
  );
}
