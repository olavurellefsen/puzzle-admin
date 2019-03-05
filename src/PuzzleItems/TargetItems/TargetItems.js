import React, { useContext } from "react";
import MainContext from "../../Context";
import { TargetItemsContainer, TargetPlaceholder } from "./TargetItems.style";
import TargetItem from "./TargetItem/TargetItem";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

export default () => {
  const [state] = useContext(MainContext);

  let currentPuzzle = state.currentPuzzles.find(
    puzzle => puzzle.scene_id === state.currentScene
  );
  if (typeof currentPuzzle === "undefined") {
    return "Loading puzzle...";
  } else {
    let currentPuzzleId = currentPuzzle.puzzle_id;
    const subscription = gql`
    subscription {
      targetitem(order_by: { sequence: asc }, where: { puzzle_id: { _eq: ${currentPuzzleId} } }) {
        id
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
              return (
                <>
                  <TargetPlaceholder className="target1">
                    Loading...
                  </TargetPlaceholder>
                  <TargetPlaceholder className="target2" />
                  <TargetPlaceholder className="target3" />
                  <TargetPlaceholder className="target4" />
                </>
              );
            } else {
              let Targetitems = data.targetitem;
              return Targetitems.map((targetitem, index) => {
                return (
                  <TargetItem
                    key={index}
                    index={index}
                    targetitem={targetitem}
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
