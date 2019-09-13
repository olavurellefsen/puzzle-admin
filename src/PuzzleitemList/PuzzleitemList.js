import React, { useState } from 'react'
import Puzzleitem from './Puzzleitem/Puzzleitem'
import { PuzzleitemListContainer, PuzzleitemAdd } from './PuzzleitemList.style'
import gql from 'graphql-tag'
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'

const PUZZLEITEM_QUERY = gql`
  query {
    puzzleitem(order_by: { sequence: asc }) {
      id
      title
      imageurl
      audiourl
    }
  }
`

const PUZZLEITEM_INSERT = gql`
  mutation {
    insert_puzzleitem(objects: { title: "" }) {
      returning {
        id
      }
    }
  }
`

const PUZZLEITEM_SUBSCRIPTION = gql`
  subscription {
    puzzleitem(order_by: { sequence: asc }) {
      id
      title
      imageurl
      audiourl
    }
  }
`

const PuzzleitemList = () => {
  const { loading, data, refetch } = useQuery(PUZZLEITEM_QUERY)
  const [insertPuzzleitem, { data : insertData }] = useMutation(PUZZLEITEM_INSERT)
  const [ newId, setNewId ] = useState(null)

  // Tell Apollo to update the query if there are any changes
  useSubscription(PUZZLEITEM_SUBSCRIPTION, {
    onSubscriptionData: () => {
      if(insertData) {
        setNewId(insertData.insert_puzzleitem.returning[0].id)
      }
      refetch()
    },
  })

  return (
    <PuzzleitemListContainer data-testid="PuzzleitemListContainer">
      {loading
        ? 'Loading...'
        : data.puzzleitem.map((puzzleitem) => {
            return <Puzzleitem key={puzzleitem.id} puzzleitem={puzzleitem} newItem={puzzleitem.id ===  newId} />
          })}
      <PuzzleitemAdd onClick={() => insertPuzzleitem()}>
        Legg afturat
      </PuzzleitemAdd>
    </PuzzleitemListContainer>
  )
}
export default PuzzleitemList
