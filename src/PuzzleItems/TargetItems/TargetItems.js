import React, { useContext } from "react";
import MainContext from "../../Context";
import { TargetItemsContainer, TargetItemsImage } from "./TargetItems.style";
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
      targetitem(order_by: { sequence: asc }, where: { puzzle_id: { _eq: ${currentPuzzleId} } }) {
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
      <TargetItemsContainer data-testid="TargetItemsContainer">
        <Subscription subscription={subscription}>
          {({ data, loading }) => {
            if (loading) {
              return "Loading...";
            } else {
              let Targetitems = data.targetitem;
              return Targetitems.map((Targetitem, index) => {
                return (
                  <TargetItemsImage
                    key={index}
                    src={`images/puzzleitems/${
                      Targetitem.puzzleItemBypuzzleItemId.imagefile
                    }`}
                    data-testid="TargetItemsImage"
                  />
                );
              });
            }
          }}
        </Subscription>
      </TargetItemsContainer>
    );
  }
};
