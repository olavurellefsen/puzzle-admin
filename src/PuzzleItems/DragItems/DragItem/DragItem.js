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
  const puzzleNameTextId = puzzleItem.textitemBynameTextitemId.id;
  const puzzleitemName = puzzleItem.textitemBynameTextitemId.textitemLanguagesBytextitemId[0].textvalue;
  const puzzleTextTextId = puzzleItem.textitemBypuzzletextTextitemId.id;
  const puzzleItemText = puzzleItem.textitemBypuzzletextTextitemId.textitemLanguagesBytextitemId[0].textvalue;
  

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
      $puzzlename_textid: Int!
      $puzzlename: String!
      $puzzletext_textid: Int!
      $puzzletext: String!
    ) {
      name: update_textitem_language(where: {_and: [{textitem_id: {_eq: $puzzlename_textid}}, {language_id: {_eq: 1}}]}, _set: {textvalue: $puzzlename}) {
        affected_rows
      }
      puzzletext: update_textitem_language(where: {_and: [{textitem_id: {_eq: $puzzletext_textid}}, {language_id: {_eq: 1}}]}, _set: {textvalue: $puzzletext}) {
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
                puzzlename_textid: puzzleNameTextId,
                puzzlename: puzzleItemNameField,
                puzzletext_textid: puzzleTextTextId,
                puzzletext: textField
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
                LÝSING AV FRÁ-MYND {dragitem.id} ({puzzleNameTextId})
              </DragItemFieldCaption>
              <DragItemInputField
                ref={itemName}
                name="itemName"
                type="text"
                value={puzzleItemNameField}
                onChange={e => setPuzzleItemNameField(e.target.value)}
              />
              <DragItemFieldCaption>TEKSTUR {puzzleTextTextId}</DragItemFieldCaption>
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
