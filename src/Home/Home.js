import React from 'react'
import PuzzleitemList from '../PuzzleitemList/PuzzleitemList'
import { HomeContainer } from './Home.style'
import { useAuth0 } from '../Auth/react-auth0-wrapper'

export default props => {
  const { isAuthenticated } = useAuth0()
  return (
    <HomeContainer>
      {isAuthenticated && (
        <div data-testid="PuzzleitemList">
          <PuzzleitemList />
        </div>
      )}
    </HomeContainer>
  )
}
