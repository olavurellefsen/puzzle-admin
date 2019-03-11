import React, { useContext } from "react";
import MainContext from "../Context";
import Puzzle from "./Puzzle/Puzzle";
import {
  PuzzleListContainer,
  PuzzleHeader,
  PuzzleListBox
} from "./PuzzleList.style";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

export default () => {
  const [state, dispatch] = useContext(MainContext);

  const subscription = gql`
  subscription {
    puzzle(
      order_by: { sequence: asc },
      where: { scene_id: { _eq: ${state.currentScene} } }
    ) {
      id
      scene_id
      puzzle_identifier
      intro_audiofile
      intro_text_id
      character
      summary
      sequence
    }
  }
  `;

  let currentPuzzleId = 0;
  return (
    <PuzzleListContainer data-testid="PuzzleListContainer">
      <PuzzleHeader>GÁTUR</PuzzleHeader>
      <PuzzleListBox>
        <Subscription subscription={subscription}>
          {({ data, loading }) => {
            if (loading) {
              return "Loading...";
            } else {
              let puzzles = data.puzzle;
              return puzzles.map((puzzle, index) => {
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
              });
            }
          }}
        </Subscription>
      </PuzzleListBox>
    </PuzzleListContainer>
  );
};

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
