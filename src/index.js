import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import "./index.css";
import { MakeMainRoutes } from "./Routes/Routes";
import MainContextStore from "./MainContextStore";
import client from "./heyBreydLocalizationClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <MainContextStore>
      <MakeMainRoutes />
    </MainContextStore>
  </ApolloProvider>,
  document.getElementById("root")
);