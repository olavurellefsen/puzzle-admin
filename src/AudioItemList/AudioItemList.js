import React from "react";
import AudioItem from "./AudioItem/AudioItem";
import { AudioItemListContainer, AudioItemListBox } from "./AudioItemList.style";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

const AudioItemList = () => {
  const subscription = gql`
    subscription {
      audioItem(order_by: { sequence: asc }) {
        id
        title
      }
    }
  `;

  return (
    <AudioItemListContainer data-testid="AudioItemListContainer" >
      <AudioItemListBox>
      <Subscription subscription={subscription}>
          {({ data, loading }) => {
            if (loading) {
              return "Loading...";
            } else {
              let audioItems = data.audioItem;
              return(
                audioItems.map((audioItem, index) => {
                  return <AudioItem key={index} audioItem={audioItem} />;
                })
              );
            }
          }}
        </Subscription>
      </AudioItemListBox>
    </AudioItemListContainer>
  );
};
export default AudioItemList;
