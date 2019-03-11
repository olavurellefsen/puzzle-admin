import React, { Component } from "react";
import {
  MenuContainer,
  MenuTop,
  MenuLogo,
  MenuTitle,
  LoginButton,
  LoginButtonText
} from "./Menu.style";

class Menu extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    const logoutURL =
      process.env.NODE_ENV === "production"
        ? "https://gaman.auth0.com/v2/logout?returnTo=http%3A%2F%2Fpuzzle%2Dadmin%2Es3%2Dwebsite%2Deu%2Dwest%2D1%2Eamazonaws%2Ecom/&client_id=CHgbizBtOICgxPnjyBbSZxUFg2qVnxMr"
        : "https://gaman.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000/&client_id=CHgbizBtOICgxPnjyBbSZxUFg2qVnxMr";
    window.location = logoutURL;
  }

  renewToken() {
    const { renewSession } = this.props.auth;
    renewSession();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <MenuContainer>
        <MenuTop>
          <MenuLogo
            src="images/logo.png"
            onClick={this.goTo.bind(this, "home")}
          />
          <MenuTitle>Puzzle Admin System</MenuTitle>
          <>
            {!isAuthenticated() && (
              <LoginButton onClick={this.login.bind(this)}>
                <LoginButtonText>Login</LoginButtonText>
              </LoginButton>
            )}
            {isAuthenticated() && (
              <LoginButton onClick={this.logout.bind(this)}>
                <LoginButtonText>Logout</LoginButtonText>
              </LoginButton>
            )}
          </>
        </MenuTop>
      </MenuContainer>
    );
  }
}

export default Menu;
