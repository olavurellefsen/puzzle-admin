import React, { useContext } from "react";
import MainContext from "../../Context";
import {
  PuzzleContainer,
  PuzzleFields,
  PuzzleFieldCaption,
  PuzzleField,
  PuzzleRightArrow
} from "./Puzzle.style";

export default function Puzzle(props) {
  const [state, dispatch] = useContext(MainContext);
  let { id, intro_audiofile, character, summary } = props.puzzle;
  const selected = id === props.currentPuzzleId;
  return (
    <PuzzleContainer
      onClick={() => {
        dispatch({
          type: "setCurrentPuzzle",
          puzzle_id: id,
          scene_id: state.currentScene
        });
      }}
      selected={selected}
    >
      <PuzzleFields>
        <PuzzleFieldCaption>PUZZLE {id}</PuzzleFieldCaption>
        <PuzzleField>
          {summary !== null ? summary : "(no description)"}
        </PuzzleField>
        <PuzzleFieldCaption>AUDIOFILE</PuzzleFieldCaption>
        <PuzzleField>
          {intro_audiofile !== null ? intro_audiofile : "-"}
        </PuzzleField>
        <PuzzleFieldCaption>CHARACTER</PuzzleFieldCaption>
        <PuzzleField>{character !== null ? character : "-"}</PuzzleField>
      </PuzzleFields>
      <PuzzleRightArrow selected={selected}>></PuzzleRightArrow>
    </PuzzleContainer>
  );
}
