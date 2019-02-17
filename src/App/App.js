import React from "react";
import { AppContainer } from "./App.style";
import Scenes from "../Scenes/Scenes";
import Menu from "../Menu/Menu";

const App = () => (
  <AppContainer>
    <Menu />
    <Scenes />
  </AppContainer>
);

export default App;
