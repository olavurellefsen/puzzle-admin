import React, { useContext, Fragment } from "react";
import { MdAdd } from "react-icons/md";
//import LineTo from "../../Utils/lineto";
import MainContext from "../../Context";
import {
  DragItemsContainer,
  DragItemsHeader,
  DragItemsBox,
  DragPlaceholder,
  AddDragItem
} from "./DragItems.style";
import DragItem from "./DragItem/DragItem";
import { Subscription, Mutation } from "react-apollo";
import gql from "graphql-tag";

export default () => {
  const [state] = useContext(MainContext);

  let currentPuzzle = state.currentPuzzles.find(
    puzzle => puzzle.scene_id === state.currentScene
  );

  const INSERT_DRAGITEM = gql`
    mutation insert_dragitem($puzzle_id: Int!) {
      insert_dragitem(
        objects: [
          {
            puzzle_id: $puzzle_id
            wait: false
            puzzleItemBypuzzleItemId: {
              data: {
                textitemBynameTextitemId: {
                  data : {
                    textgroup: "dragitem-name"
                    textitemLanguagesBytextitemId: {
                      data: {
                        language_id: 1
                        textvalue: ""
                      }
                    }
                  }
                }
								textitemBypuzzletextTextitemId: {
                  data: {
                    textgroup:"dragitem-text"
                    textitemLanguagesBytextitemId: {
                      data: {
                        language_id: 1
                        textvalue: ""
                      }
                    }                    
                  }
                }
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

  const SUBSCRIBE_DRAGITEM = gql`
    subscription get_dragitem($puzzle_id: Int!) {
      dragitem(
        order_by: { sequence: asc }
        where: {
          _and: [
            { puzzle_id: { _eq: $puzzle_id } }
            {
              puzzleItemBypuzzleItemId: {
                textitemBynameTextitemId: { 
                  textitemLanguagesBytextitemId : {
                  	language_id: { _eq: 1 } 
                  }
                }
              }
            }
            {
              puzzleItemBypuzzleItemId: {
                textitemBypuzzletextTextitemId: { 
                  textitemLanguagesBytextitemId : {
                  	language_id: { _eq: 1 } 
                  }
                }
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
          textitemBynameTextitemId {
            id
            textgroup
            textitemLanguagesBytextitemId {
              textvalue
            }
          }
          textitemBypuzzletextTextitemId {
            id
            textgroup
            textitemLanguagesBytextitemId {
              textvalue
            }
          }
        }
        draglogicsBydragitemId {
          dragitem_id
        }
      }
    }
  `;

  if (typeof currentPuzzle === "undefined") {
    return "Loading puzzle...";
  } else {
    let currentPuzzleId = currentPuzzle.puzzle_id;

    const dragItems = (
      <Subscription
        subscription={SUBSCRIBE_DRAGITEM}
        variables={{ puzzle_id: currentPuzzleId }}
      >
        {({ data, loading }) => {
          if (loading) {
            return (
              <>
                <DragPlaceholder className="drag1">Loading...</DragPlaceholder>
                <DragPlaceholder className="drag2" />
                <DragPlaceholder className="drag3" />
                <DragPlaceholder className="drag4" />
              </>
            );
          } else {
            const dragitems = data.dragitem;
            return dragitems.map((dragitem, index) => {
              /* const lines = dragitem.draglogicsBydragitemId.map(
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
              );*/
              return (
                <Fragment key={index}>
                  <DragItem data-testid="DragItem" key={index} index={index} dragitem={dragitem} />
                </Fragment>
              );
            });
          }
        }}
      </Subscription>
    );

    const insertDragItem = (
      <Mutation mutation={INSERT_DRAGITEM}>
        {(insertDragItem, { data }) => (
          <AddDragItem>
            <MdAdd
              onClick={() => {
                insertDragItem({
                  variables: { puzzle_id: currentPuzzleId }
                });
              }}
            />
          </AddDragItem>
        )}
      </Mutation>
    );

    return (
      <DragItemsContainer data-testid="DragItemsContainer">
        <DragItemsHeader>FRÁ-MYNDIR</DragItemsHeader>
        <DragItemsBox>
          {dragItems}
          {insertDragItem}
        </DragItemsBox>
      </DragItemsContainer>
    );
  }
};
