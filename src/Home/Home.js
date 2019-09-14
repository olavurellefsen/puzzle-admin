import React from 'react'
import Puzzleitems from '../Puzzleitems/Puzzleitems'
import { HomeContainer } from './Home.style'
import { useAuth0 } from '../Auth/react-auth0-wrapper'

export default () => {
  const { isAuthenticated } = useAuth0()
  return (
    <HomeContainer>
      {isAuthenticated && (
        <div data-testid="Puzzleitems">
          <Puzzleitems />
        </div>
      )}
    </HomeContainer>
  )
}
