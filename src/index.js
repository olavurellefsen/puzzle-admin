import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import "./index.css";
import App from "./App/App";
import MainContextStore from "./MainContextStore";
import client from "./heyBreydLocalizationClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <MainContextStore>
      <App />
    </MainContextStore>
  </ApolloProvider>,
  document.getElementById("root")
);