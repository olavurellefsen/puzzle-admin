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
  const puzzleitemId = puzzleItem.id;
  const puzzleitemName = puzzleItem.name;
  const puzzleItemText = puzzleItem.itemBypuzzletextKey.value;
  const puzzletextKey = puzzleItem.puzzletext_key;

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
      $puzzleitemid: Int!
      $puzzleitemtext: String!
      $puzzletextitemkey: String!
      $puzzlename: String!
    ) {
      update_puzzle_item(where: { id: { _eq: $puzzleitemid } }, _set: { name: $puzzlename }) {
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
            <TargetItemForm
              onKeyPress={e => {
                if (e.key === "Enter") {
                  submitForm(e);
                }
              }}
              onSubmit={e => submitForm(e)}
            >
              <TargetItemFieldCaption>LÝSING AV HÁLIMYND {targetitem.id}</TargetItemFieldCaption>
              <TargetItemInputField
                ref={itemName}
                name="itemName"
                type="text"
                value={puzzleItemNameField}
                onChange={e => setPuzzleItemNameField(e.target.value)}
              />
              <TargetItemFieldCaption>TEKSTUR</TargetItemFieldCaption>
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
