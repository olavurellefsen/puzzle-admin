import React, { useContext } from "react";
import MainContext from "../../Context";
import { DragItemsContainer, DragItemsImage } from "./DragItems.style";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

export default () => {
  const [state] = useContext(MainContext);

  let currentPuzzle = state.currentPuzzles.find(
    puzzle => puzzle.scene_id === state.currentScene
  );
  if (typeof currentPuzzle === "undefined") {
    return "Loading...";
  } else {
    let currentPuzzleId = currentPuzzle.puzzle_id;
    const subscription = gql`
    subscription {
      dragitem(order_by: { sequence: asc }, where: { puzzle_id: { _eq: ${currentPuzzleId} } }) {
        puzzle_id
        sequence
        puzzleItemBypuzzleItemId {
          imagefile
          name
        }
      }
    }
    `;

    return (
      <DragItemsContainer data-testid="DragItemsContainer">
        <Subscription subscription={subscription}>
          {({ data, loading }) => {
            if (loading) {
              return "Loading...";
            } else {
              let dragitems = data.dragitem;
              return dragitems.map((dragitem, index) => {
                return (
                  <DragItemsImage
                    key={index}
                    src={`images/puzzleitems/${
                      dragitem.puzzleItemBypuzzleItemId.imagefile
                    }`}
                    data-testid="DragItemsImage"
                  />
                );
              });
            }
          }}
        </Subscription>
      </DragItemsContainer>
    );
  }
};
