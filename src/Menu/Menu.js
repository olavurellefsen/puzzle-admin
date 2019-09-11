import React from 'react'
import { useAuth0 } from '../Auth/react-auth0-wrapper'
import { Link } from 'react-router-dom'
import {
  MenuContainer,
  MenuTop,
  MenuLogo,
  MenuTitle,
  LoginButton,
  LoginButtonText,
} from './Menu.style'

const Menu = () => {
  const { isAuthenticated, loading, loginWithRedirect, logout } = useAuth0()

  return (
    <MenuContainer>
      <MenuTop>
        <Link to="/">
          <MenuLogo src="images/logo.png" />
        </Link>
        <MenuTitle>Puzzle Admin System</MenuTitle>
        <>
          {!isAuthenticated && !loading && (
            <LoginButton onClick={() => loginWithRedirect({})}>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButton>
          )}
          {isAuthenticated && (
            <LoginButton onClick={() => logout()}>
              <LoginButtonText>Logout</LoginButtonText>
            </LoginButton>
          )}
        </>
      </MenuTop>
    </MenuContainer>
  )
}

export default Menu
