import React, { useState, useContext, useRef } from "react";
import MainContext from "../../Context";
import {
  PuzzleContainer,
  PuzzleForm,
  PuzzleFieldCaption,
  PuzzleField,
  PuzzleInputField,
  PuzzleRightArrow
} from "./Puzzle.style";

export default function Puzzle(props) {
  const [state, dispatch] = useContext(MainContext);
  const [summary, setSummary] = useState(props.puzzle.summary!==null ? props.puzzle.summary : "");
  let { id, intro_audiofile, character } = props.puzzle;
  const puzzleSummary = useRef(null);

  const handleFormSubmit = e => {
    e.preventDefault();
    puzzleSummary.current.blur();
  };
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
      <PuzzleForm onSubmit={handleFormSubmit}>
        <PuzzleFieldCaption>PUZZLE {id}</PuzzleFieldCaption>
        <PuzzleInputField
          ref={puzzleSummary}
          name="summary"
          type="text"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
        <PuzzleFieldCaption>AUDIOFILE</PuzzleFieldCaption>
        <PuzzleField>
          {intro_audiofile !== null ? intro_audiofile : "-"}
        </PuzzleField>
        <PuzzleFieldCaption>CHARACTER</PuzzleFieldCaption>
        <PuzzleField>{character !== null ? character : "-"}</PuzzleField>
      </PuzzleForm>
      <PuzzleRightArrow selected={selected}>></PuzzleRightArrow>
    </PuzzleContainer>
  );
}
