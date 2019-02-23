import React from "react";
import { Route, Router } from "react-router-dom";
import App from "../App/App";
import Home from "../Home/Home";
import Callback from "../Callback/Callback";
import Auth from "../Auth/Auth";
import history from "../history";
import { RoutesContainer } from "./Routes.style";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const MakeMainRoutes = () => {
  const logoutURL =
    process.env.NODE_ENV === "production"
      ? "https://gaman.auth0.com/v2/logout?returnTo=http%3A%2F%2Fpuzzle%2Dadmin%2Es3%2Dwebsite%2Deu%2Dwest%2D1%2Eamazonaws%2Ecom/&client_id=CHgbizBtOICgxPnjyBbSZxUFg2qVnxMr"
      : "https://gaman.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000/&client_id=CHgbizBtOICgxPnjyBbSZxUFg2qVnxMr";
  return (
    <Router history={history} component={App}>
      <RoutesContainer>
        <Route path="/" render={props => <App auth={auth} {...props} />} />
        <Route path="/home" render={props => <Home auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route
          path="/logout"
          component={() => {
            window.location = logoutURL;
            return null;
          }}
        />
      </RoutesContainer>
    </Router>
  );
};
