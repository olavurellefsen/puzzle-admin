import React, { useState } from "react";
import {
  DragItemContainer,
  DragItemForm,
  DragItemTopContent,
  DragItemImage,
  DragItemBubbleText,
  DragItemFieldCaption,
  DragItemField,
  DragItemRestContent
} from "./DragItem.style";
import ToggleSwitch from "../../../Fields/ToggleSwitch/ToggleSwitch";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default props => {
  const { index, dragitem } = props;
  const wait = dragitem.wait;
  const [ waitField, setWaitField ] = useState(wait);
  const puzzleItem = dragitem.puzzleItemBypuzzleItemId;
  const item = puzzleItem.itemBybubbleTextId;

  // If the parent component is updated (someone else has changed the value), then update the field here
  if (wait !== waitField) {
    setWaitField(wait);
  }

  const UPDATE_DRAGITEM = gql`
    mutation update_dragitem($id: Int!, $wait: Boolean!) {
      update_dragitem(where: { id: { _eq: $id } }, _set: { wait: $wait }) {
        affected_rows
      }
    }
  `;
  
  return (
    <DragItemContainer
      data-testid="DragItemContainer"
      className={`drag${dragitem.id}`}
      id={`drag${dragitem.id}`}
    >
      <Mutation mutation={UPDATE_DRAGITEM}>
        {(updateDragItem, { data }) => (
          <DragItemForm
            onSubmit={e => {
              e.preventDefault();
              updateDragItem({
                variables: { id: dragitem.id, wait: waitField }
              })
            }}>
            <DragItemTopContent>
              <DragItemImage
                key={index}
                src={`images/puzzleitems/${puzzleItem.imagefile}`}
                data-testid="DragItemsImage"
              />
              <DragItemBubbleText>
                <DragItemFieldCaption>Bubble text</DragItemFieldCaption>
                <DragItemField>{item.value}</DragItemField>
              </DragItemBubbleText>
            </DragItemTopContent>
            <DragItemRestContent>
              <DragItemFieldCaption>Name</DragItemFieldCaption>
              <DragItemField>{puzzleItem.name}</DragItemField>
              <DragItemFieldCaption>Image file</DragItemFieldCaption>
              <DragItemField>{puzzleItem.imagefile}</DragItemField>
              <DragItemFieldCaption>Wait</DragItemFieldCaption>
              <ToggleSwitch
                toggled={waitField}
                onToggle={() => {
                  updateDragItem({
                    variables: { id: dragitem.id, wait: !waitField }
                  })
                  setWaitField(!waitField);
                }}
              />
            </DragItemRestContent>
          </DragItemForm>
        )}
      </Mutation>
    </DragItemContainer>
  );
};
