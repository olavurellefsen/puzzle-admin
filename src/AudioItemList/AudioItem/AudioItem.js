import React, { useState, useContext, useRef } from "react";
import { capitalizeFirstLetter } from "../../Utils/Utils";
import MainContext from "../../Context";
import {
  AudioItemContainer,
  AudioItemTitleForm,
  AudioItemTitle,
  AudioItemRightArrow
} from "./AudioItem.style";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export default (props) => {
  const [state, dispatch] = useContext(MainContext);
  let { id, title, image_filename } = props.audioItem;
  title = capitalizeFirstLetter(title);
  const [titleField, setTitleField] = useState(title);
  const audioItemTitle = useRef(null);

  //If the parent component is updated (someone else has changed the value), then update the field here
  if (title !== titleField && title !== null && audioItemTitle.current !== null) {
    if (audioItemTitle.current.defaultValue === titleField) {
      setTitleField(title);
    }
  }

  const UPDATE_AUDIOITEM = gql`
    mutation update_audioItem($id: Int!, $title: String!) {
      update_audioItem(where: { id: { _eq: $id } }, _set: { title: $title }) {
        affected_rows
      }
    }
  `;

  const selected = state.currentAudioItem === id;
  return (
    <AudioItemContainer
      selected={selected}
      onClick={() => {
        dispatch({ type: "setCurrentAudioItem", number: id });
      }}
      backgroundImage={"images/audioitems/" + image_filename}
      data-testid="AudioItemContainer" 
    >
      <Mutation mutation={UPDATE_AUDIOITEM}>
        {(updateAudioItemTitle, { data }) => (
          <AudioItemTitleForm
            onSubmit={e => {
              e.preventDefault();
              updateAudioItemTitle({ variables: { id: id, title: titleField } });
              audioItemTitle.current.blur();
            }}
          >
            <AudioItemTitle
              ref={audioItemTitle}
              name="title"
              type="text"
              value={titleField}
              onChange={e => setTitleField(e.target.value)}
            />
          </AudioItemTitleForm>
        )}
      </Mutation>
      <AudioItemRightArrow selected={selected}>></AudioItemRightArrow>
    </AudioItemContainer>
  );
}
