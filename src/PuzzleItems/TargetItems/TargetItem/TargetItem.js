import React, { useState, useRef } from "react";
import {
  TargetItemContainer,
  TargetItemForm,
  TargetItemFieldCaption,
  TargetItemInputField
} from "./TargetItem.style";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default props => {
  const { targetitem } = props;
  const puzzleItem = targetitem.puzzleItemBypuzzleItemId;
  const puzzleNameTextId = puzzleItem.textitemBynameTextitemId.id;
  const puzzleitemName = puzzleItem.textitemBynameTextitemId.textitemLanguagesBytextitemId[0].textvalue;
  const puzzleTextTextId = puzzleItem.textitemBypuzzletextTextitemId.id;
  const puzzleItemText = puzzleItem.textitemBypuzzletextTextitemId.textitemLanguagesBytextitemId[0].textvalue;

  const [textField, setTextField] = useState(puzzleItemText);
  const [puzzleItemNameField, setPuzzleItemNameField] = useState(puzzleitemName);
  
  const itemText = useRef(null);
  const itemName = useRef(null);

  // If the parent component is updated (someone else has changed the value), then update the field here
  if (puzzleItemText!==textField && puzzleitemName!==puzzleItemNameField) {
    if (itemText.current.defaultValue === textField) {
      setTextField(puzzleItemText);
    }
    if (itemName.current.defaultValue === puzzleItemNameField) {
      setPuzzleItemNameField(puzzleitemName);
    }    
  }

  const UPDATE_DRAGITEM = gql`
    mutation update_targetitem(
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
    <TargetItemContainer
      data-testid="TargetItemContainer"
      className={`target${targetitem.id}`}
      id={`target${targetitem.id}`}
    >
      <Mutation mutation={UPDATE_DRAGITEM}>
        {(updateTargetItem, { data }) => {
          const submitForm = e => {
            e.preventDefault();
            updateTargetItem({
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
            <TargetItemForm
              onKeyPress={e => {
                if (e.key === "Enter") {
                  submitForm(e);
                }
              }}
              onSubmit={e => submitForm(e)}
            >
              <TargetItemFieldCaption>LÝSING AV TIL-MYND {targetitem.id}  ({puzzleNameTextId})</TargetItemFieldCaption>
              <TargetItemInputField
                ref={itemName}
                name="itemName"
                type="text"
                value={puzzleItemNameField}
                onChange={e => setPuzzleItemNameField(e.target.value)}
              />
              <TargetItemFieldCaption>TEKSTUR {puzzleTextTextId}</TargetItemFieldCaption>
              <TargetItemInputField
                ref={itemText}
                name="itemText"
                type="text"
                value={textField}
                onChange={e => setTextField(e.target.value)}
              />
            </TargetItemForm>
          );
        }}
      </Mutation>
    </TargetItemContainer>
  );
};
