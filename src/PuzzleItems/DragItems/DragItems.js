import React, { useContext, Fragment } from "react";
import LineTo from "../../Utils/lineto";
import MainContext from "../../Context";
import { DragItemsContainer, DragPlaceholder } from "./DragItems.style";
import DragItem from "./DragItem/DragItem";
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
      dragitem(
        order_by: {sequence: asc},
        where: {_and: [
          {puzzle_id: {_eq: ${currentPuzzleId}}},
  	      {puzzleItemBypuzzleItemId: {itemBybubbleTextId: { language_id: {_eq: 1}}}},
        ]}
      )
      {
        id
        puzzle_id
        sequence
        wait
        puzzleItemBypuzzleItemId {
          imagefile
          name
          itemBybubbleTextId {
            value
          }
        }
        draglogicsBydragitemId {
          targetitem_id
        }        
      }
    }
    `;

    return (
      <DragItemsContainer data-testid="DragItemsContainer">
        <Subscription subscription={subscription}>
          {({ data, loading }) => {
            if (loading) {
              return (
                <>
                  <DragPlaceholder className="drag1">
                    Loading...
                  </DragPlaceholder>
                  <DragPlaceholder className="drag2" />
                  <DragPlaceholder className="drag3" />
                  <DragPlaceholder className="drag4" />
                </>
              );
            } else {
              let dragitems = data.dragitem;
              return dragitems.map((dragitem, index) => {
                const lines = dragitem.draglogicsBydragitemId.map(
                  (logicitem, index2) => {
                    return (
                      <LineTo
                        key={index2}
                        from={`drag${dragitem.id}`}
                        to={`target${logicitem.targetitem_id}`}
                        fromAnchor="middle right"
                        toAnchor="middle left"
                        borderWidth={3}
                        delay={1000}
                        zIndex={999}
                      />
                    );
                  }
                );
                return (
                  <Fragment key={index}>
                    <DragItem key={index} index={index} dragitem={dragitem} />
                    {lines}
                  </Fragment>
                );
              });
            }
          }}
        </Subscription>
      </DragItemsContainer>
    );
  }
};
