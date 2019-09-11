import React from 'react'
import Puzzleitem from './Puzzleitem/Puzzleitem'
import { PuzzleitemListContainer } from './PuzzleitemList.style'
import { Subscription } from 'react-apollo'
import gql from 'graphql-tag'

const PuzzleitemList = () => {
  const subscription = gql`
    subscription {
      puzzleitem(order_by: { sequence: asc }) {
        id
        title
        imageurl
        audiourl
      }
    }
  `

  return (
    <PuzzleitemListContainer data-testid="PuzzleitemListContainer">
      <Subscription subscription={subscription}>
        {({ data, loading }) => {
          if (loading) {
            return 'Loading...'
          } else {
            let puzzleitems = data.puzzleitem
            return puzzleitems.map((puzzleitem, index) => {
              return <Puzzleitem key={index} puzzleitem={puzzleitem} />
            })
          }
        }}
      </Subscription>
    </PuzzleitemListContainer>
  )
}
export default PuzzleitemList
