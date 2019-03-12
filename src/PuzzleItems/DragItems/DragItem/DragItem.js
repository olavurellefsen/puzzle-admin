import React, { useState, useRef } from "react";
import {
  DragItemContainer,
  DragItemForm,
  DragItemFieldCaption,
  DragItemInputField
} from "./DragItem.style";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default props => {
  const { dragitem } = props;
  const puzzleItem = dragitem.puzzleItemBypuzzleItemId;
  const puzzleitemId = puzzleItem.id;
  const puzzleitemName = puzzleItem.name;
  const puzzleItemText = puzzleItem.itemBypuzzletextKey.value;
  const puzzletextKey = puzzleItem.puzzletext_key;

  const [textField, setTextField] = useState(
    puzzleItemText !== null ? puzzleItemText : ""
  );
  const [puzzleItemNameField, setPuzzleItemNameField] = useState(
    puzzleitemName !== null ? puzzleitemName : ""
  );

  const itemText = useRef(null);
  const itemName = useRef(null);

  // If the parent component is updated (someone else has changed the value), then update the field here
  if (puzzleItemText !== textField && puzzleitemName !== puzzleItemNameField) {
    if (itemText.current.defaultValue === textField) {
      setTextField(puzzleItemText);
    }
    if (itemName.current.defaultValue === puzzleItemNameField) {
      setPuzzleItemNameField(puzzleitemName);
    }
  }

  const UPDATE_DRAGITEM = gql`
    mutation update_dragitem(
      $puzzleitemid: Int!
      $puzzleitemtext: String!
      $puzzletextitemkey: String!
      $puzzlename: String!
    ) {
      update_puzzle_item(
        where: { id: { _eq: $puzzleitemid } }
        _set: { name: $puzzlename }
      ) {
        affected_rows
      }
      update_item(
        where: {
          _and: [
            { key: { _eq: $puzzletextitemkey } }
            { language_id: { _eq: 1 } }
          ]
        }
        _set: { value: $puzzleitemtext }
      ) {
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
        {(updateDragItem, { data }) => {
          const submitForm = e => {
            e.preventDefault();
            updateDragItem({
              variables: {
                puzzleitemid: puzzleitemId,
                puzzleitemtext: textField,
                puzzletextitemkey: puzzletextKey,
                puzzlename: puzzleItemNameField
              }
            });
            itemName.current.blur();
            itemText.current.blur();
          };
          return (
            <DragItemForm
              onKeyPress={e => {
                if (e.key === "Enter") {
                  submitForm(e);
                }
              }}
              onSubmit={e => submitForm(e)}
            >
              <DragItemFieldCaption>
                LÝSING AV HÁLIMYND {dragitem.id}
              </DragItemFieldCaption>
              <DragItemInputField
                ref={itemName}
                name="itemName"
                type="text"
                value={puzzleItemNameField}
                onChange={e => setPuzzleItemNameField(e.target.value)}
              />
              <DragItemFieldCaption>TEKSTUR</DragItemFieldCaption>
              <DragItemInputField
                ref={itemText}
                name="itemText"
                type="text"
                value={textField}
                onChange={e => setTextField(e.target.value)}
              />
            </DragItemForm>
          );
        }}
      </Mutation>
    </DragItemContainer>
  );
};
