import React, { useState, useContext, useRef } from "react";
import MainContext from "../../Context";
import {
  PuzzleContainer,
  PuzzleForm,
  PuzzleFieldCaption,
  PuzzleInputField,
  PuzzleTextAreaField,
  PuzzleRightArrow
} from "./Puzzle.style";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default props => {
  const [state, dispatch] = useContext(MainContext);
  const { id, summary, character, intro_audiofile, introtext_item_key } = props.puzzle;
  const introText = props.puzzle.itemByintrotextItemKey.value;

  const [summaryField, setSummaryField] = useState(
    summary !== null ? summary : ""
  );
  const [introtextField, setIntrotextField] = useState(
    introText !== null ? introText : ""
  );
  const [characterField, setCharacterField] = useState(
    character !== null ? character : ""
  );
  const [audiofileField, setAudiofileField] = useState(
    intro_audiofile !== null ? intro_audiofile : ""
  );

  const puzzleSummary = useRef(null);
  const puzzleIntroText = useRef(null);
  const puzzleCharacter = useRef(null);
  const puzzleAudiofile = useRef(null);

  // If the parent component is updated (someone else has changed the value), then update the fields here
  if (
    summary !== summaryField &&
    summary !== null &&
    puzzleSummary.current !== null
  ) {
    if (puzzleSummary.current.defaultValue === summaryField) {
      setSummaryField(summary);
    }
    if (puzzleIntroText.current.defaultValue === introtextField) {
      setIntrotextField(introText);
    }    
    if (puzzleCharacter.current.defaultValue === characterField) {
      setCharacterField(character);
    }    
    if (puzzleAudiofile.current.defaultValue === audiofileField) {
      setAudiofileField(intro_audiofile);
    }
  }

  const UPDATE_PUZZLE = gql`
    mutation update_puzzle($id: Int!, $summary: String!, $character: String!, $audiofile: String!, $introtextitemkey: String!, $introtext: String!) {
      update_puzzle(
        where: { id: { _eq: $id } }
        _set: { summary: $summary, character: $character, intro_audiofile: $audiofile }
      ) {
        affected_rows
      }
      update_item(
        where: {
          _and: [
            {key: { _eq: $introtextitemkey }}
            {language_id: { _eq: 1 }}
          ]
        }
        _set: { 
          value: $introtext
        }
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
                character: characterField,
                audiofile: audiofileField,
                introtextitemkey: introtext_item_key,
                introtext: introtextField            
              }
            });
            puzzleSummary.current.blur();
            puzzleIntroText.current.blur();
            puzzleCharacter.current.blur();
            //puzzleAudiofile.current.blur();            
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
              <PuzzleFieldCaption>GÁTUHEITI {id}</PuzzleFieldCaption>
              <PuzzleTextAreaField
                rows="3"
                columns="50"
                ref={puzzleSummary}
                name="summary"
                value={summaryField}
                onChange={e => setSummaryField(e.target.value)}
              />
              <PuzzleFieldCaption>INTROTEKSTUR</PuzzleFieldCaption>
              <PuzzleTextAreaField
                rows="3"
                columns="50"
                ref={puzzleIntroText}
                name="introtext"
                value={introtextField}
                onChange={e => setIntrotextField(e.target.value)}
              />              
              <PuzzleFieldCaption>LEIKARI</PuzzleFieldCaption>
              <PuzzleInputField
                ref={puzzleCharacter}
                name="character"
                type="text"
                value={characterField}
                onChange={e => setCharacterField(e.target.value)}
              />
              {/*<PuzzleFieldCaption>LJÓÐFÍLA</PuzzleFieldCaption>
              <PuzzleInputField
                ref={puzzleAudiofile}
                name="audiofile"
                type="text"
                value={audiofileField}
                onChange={e => setAudiofileField(e.target.value)}
              />*/}              
            </PuzzleForm>
          );
        }}
      </Mutation>
      <PuzzleRightArrow selected={selected}>></PuzzleRightArrow>
    </PuzzleContainer>
  );
};
