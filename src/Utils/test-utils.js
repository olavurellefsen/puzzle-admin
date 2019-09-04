import React from "react";
import { render } from "@testing-library/react";
import { ApolloProvider } from "react-apollo";
import MainContextStore from "../MainContextStore";
import client from "../heyBreydLocalizationClient";

const AllTheProviders = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <MainContextStore>{children}</MainContextStore>
    </ApolloProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
