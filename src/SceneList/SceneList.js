import React from "react";
import Scene from "./Scene/Scene";
import { SceneListContainer, SceneListBox } from "./SceneList.style";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

const SceneList = () => {
  const subscription = gql`
    subscription {
      scene(order_by: { sequence: asc }) {
        id
        title
        image_filename
        initial_puzzle_id
        sequence
      }
    }
  `;

  return (
    <SceneListContainer data-testid="SceneListContainer" >
      <SceneListBox>
      <Subscription subscription={subscription}>
          {({ data, loading }) => {
            if (loading) {
              return "Loading...";
            } else {
              let scenes = data.scene;
              return(
                scenes.map((scene, index) => {
                  return <Scene key={index} scene={scene} />;
                })
              );
            }
          }}
        </Subscription>
      </SceneListBox>
    </SceneListContainer>
  );
};
export default SceneList;
