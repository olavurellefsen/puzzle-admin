import React from "react";
import Scenes from "../Scenes/Scenes";


export default function Home(props) {
  const { isAuthenticated } = props.auth;
  return (
    <div>
      {isAuthenticated() && (
        <Scenes />
      )}
    </div>
  );
}
