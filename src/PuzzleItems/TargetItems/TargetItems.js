import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import MainContext from "../../Context";
import {
  TargetItemsContainer,
  TargetItemsHeader,
  TargetItemsBox,
  TargetPlaceholder,
  AddTargetItem
} from "./TargetItems.style";
import TargetItem from "./TargetItem/TargetItem";
import { Subscription, Mutation } from "react-apollo";
import gql from "graphql-tag";

export default () => {
  const [state] = useContext(MainContext);

  let currentPuzzle = state.currentPuzzles.find(
    puzzle => puzzle.scene_id === state.currentScene
  );

  const INSERT_TARGETITEM = gql`
    mutation insert_targetitem($puzzle_id: Int!) {
      insert_targetitem(
        objects: [
          {
            puzzle_id: $puzzle_id
            wait: false
            puzzleItemBypuzzleItemId: {
              data: {
                imagefile: "placeholder.png"
                name: "new target item"
              }
            }
          }
        ]
      ) {
        returning {
          id
        }
      }
    }
  `;

  const SUBSCRIBE_TARGETITEM = gql`
    subscription get_targetitem($puzzle_id: Int!) {
      targetitem(
        order_by: { sequence: asc }
        where: {
          _and: [
            { puzzle_id: { _eq: $puzzle_id } }
            {
              puzzleItemBypuzzleItemId: {
                itemBypuzzletextKey: { language_id: { _eq: 1 } }
              }
            }
          ]
        }
      ) {
        id
        puzzle_id
        sequence
        wait
        puzzleItemBypuzzleItemId {
          id
          imagefile
          name
          puzzletext_key
          itemBypuzzletextKey {
            value
          }
        }
        draglogicsBytargetitemId {
          dragitem_id
        }
      }
    }
  `;

  if (typeof currentPuzzle === "undefined") {
    return "Loading puzzle...";
  } else {
    let currentPuzzleId = currentPuzzle.puzzle_id;

    const targetItems = (
      <Subscription
        subscription={SUBSCRIBE_TARGETITEM}
        variables={{ puzzle_id: currentPuzzleId }}
      >
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
                <TargetItem key={index} index={index} targetitem={targetitem} />
              );
            });
          }
        }}
      </Subscription>
    );

    const insertTargetItem = (
      <Mutation mutation={INSERT_TARGETITEM}>
        {(insertTargetItem, { data }) => (
          <AddTargetItem>
            <MdAdd
              onClick={() => {
                insertTargetItem({
                  variables: { puzzle_id: currentPuzzleId }
                });
              }}
            />
          </AddTargetItem>
        )}
      </Mutation>
    );

    return (
      <TargetItemsContainer data-testid="TargetItemsContainer">
        <TargetItemsHeader>MÁLSKIVUMYNDIR</TargetItemsHeader>
        <TargetItemsBox>
          {targetItems}
        </TargetItemsBox>
      </TargetItemsContainer>
    );
  }
};
