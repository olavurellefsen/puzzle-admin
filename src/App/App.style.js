import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(89,231,255);
`;
MenuContainer.displayName = 'MenuContainer';

export const MenuTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MenuLogo  = styled.img`
  padding: 10px;
`;
MenuLogo.displayName = 'MenuLogo';

export const MenuTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 120px;
`;

export const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 40px;
  background: #65CF16;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  cursor: pointer;
  margin: 20px 0px;
`;
LoginButton.displayName = "LoginButton";

export const LoginButtonText = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  color: white;
`;
LoginButtonText.displayName = "LoginButtonText";