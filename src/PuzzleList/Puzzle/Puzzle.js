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
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default (props) => {
  const [state, dispatch] = useContext(MainContext);
  let { id, intro_audiofile, character, summary } = props.puzzle;
  const [summaryField, setSummaryField] = useState(
    summary !== null ? summary : ""
  );
  const puzzleSummary = useRef(null);

  // If the parent component is updated (someone else has changed the value), then update the field here
  if (
    summary !== summaryField &&
    summary !== null &&
    puzzleSummary.current !== null
  ) {
    if (puzzleSummary.current.defaultValue === summaryField) {
      setSummaryField(summary);
    }
  }

  const UPDATE_PUZZLE = gql`
    mutation update_puzzle($id: Int!, $summary: String!) {
      update_puzzle(where: { id: { _eq: $id } }, _set: { summary: $summary }) {
        affected_rows
      }
    }
  `;

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
      data-testid="PuzzleContainer" 
    >
      <Mutation mutation={UPDATE_PUZZLE}>
        {(updatePuzzleTitle, { data }) => (
          <PuzzleForm
            onSubmit={e => {
              e.preventDefault();
              updatePuzzleTitle({
                variables: { id: id, summary: summaryField }
              });
              puzzleSummary.current.blur();
            }}
          >
            <PuzzleFieldCaption>PUZZLE {id}</PuzzleFieldCaption>
            <PuzzleInputField
              ref={puzzleSummary}
              name="summary"
              type="text"
              value={summaryField}
              onChange={e => setSummaryField(e.target.value)}
            />
            <PuzzleFieldCaption>AUDIOFILE</PuzzleFieldCaption>
            <PuzzleField>
              {intro_audiofile !== null ? intro_audiofile : "-"}
            </PuzzleField>
            <PuzzleFieldCaption>CHARACTER</PuzzleFieldCaption>
            <PuzzleField>{character !== null ? character : "-"}</PuzzleField>
          </PuzzleForm>
        )}
      </Mutation>
      <PuzzleRightArrow selected={selected}>></PuzzleRightArrow>
    </PuzzleContainer>
  );
}
