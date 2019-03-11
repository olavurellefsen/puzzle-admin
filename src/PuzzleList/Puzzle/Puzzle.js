import React, { useState, useContext, useRef } from "react";
import MainContext from "../../Context";
import {
  PuzzleContainer,
  PuzzleForm,
  PuzzleFieldCaption,
  PuzzleField,
  PuzzleInputField,
  PuzzleTextAreaField,
  PuzzleRightArrow
} from "./Puzzle.style";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default props => {
  const [state, dispatch] = useContext(MainContext);
  const { id, intro_audiofile, character, summary } = props.puzzle;
  const [summaryField, setSummaryField] = useState(
    summary !== null ? summary : ""
  );
  const [audiofileField, setAudiofileField] = useState(
    intro_audiofile !== null ? intro_audiofile : ""
  );
  const puzzleSummary = useRef(null);
  const audiofile = useRef(null);

  // If the parent component is updated (someone else has changed the value), then update the fields here
  if (
    summary !== summaryField &&
    summary !== null &&
    puzzleSummary.current !== null
  ) {
    if (puzzleSummary.current.defaultValue === summaryField) {
      setSummaryField(summary);
    }
    if (audiofile.current.defaultValue === audiofileField) {
      setAudiofileField(intro_audiofile);
    }
  }

  const UPDATE_PUZZLE = gql`
    mutation update_puzzle($id: Int!, $summary: String!, $audiofile: String!) {
      update_puzzle(
        where: { id: { _eq: $id } }
        _set: { summary: $summary, intro_audiofile: $audiofile }
      ) {
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
        {(updatePuzzle, { data }) => {
          const submitForm = e => {
            e.preventDefault();
            updatePuzzle({
              variables: {
                id: id,
                summary: summaryField,
                audiofile: audiofileField
              }
            });
            puzzleSummary.current.blur();
            audiofile.current.blur();
          };
          return (
            <PuzzleForm
              onKeyPress={e => {
                if (e.key === "Enter") {
                  submitForm(e);
                }
              }}
              onSubmit={e => submitForm(e)}
            >
              <PuzzleFieldCaption>PUZZLE {id}</PuzzleFieldCaption>
              <PuzzleTextAreaField
                rows="3"
                columns="50"
                ref={puzzleSummary}
                name="summary"
                value={summaryField}
                onChange={e => setSummaryField(e.target.value)}
              />
              <PuzzleFieldCaption>AUDIOFILE</PuzzleFieldCaption>
              <PuzzleInputField
                ref={audiofile}
                name="audiofile"
                type="text"
                value={audiofileField}
                onChange={e => setAudiofileField(e.target.value)}
              />
              <PuzzleFieldCaption>CHARACTER</PuzzleFieldCaption>
              <PuzzleField>{character !== null ? character : "-"}</PuzzleField>
            </PuzzleForm>
          );
        }}
      </Mutation>
      <PuzzleRightArrow selected={selected}>></PuzzleRightArrow>
    </PuzzleContainer>
  );
};
