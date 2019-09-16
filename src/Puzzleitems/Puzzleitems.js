import React, { useState } from 'react'
import PuzzleTable from './PuzzleTable/PuzzleTable'
import AddPuzzleitemForm from './forms/AddPuzzleitemForm'
import EditPuzzleitemForm from './forms/EditPuzzleitemForm'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'

const PuzzleitemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 20px;
`

const EditorContainer = styled.div`
`

const FormHeaderStyle = styled.h2`
  margin: 0px;
`

const PUZZLEITEM_QUERY = gql`
  query {
    puzzleitem(where: {archived: {_eq: false}}, order_by: { sequence: asc }) {
      id
      title
      audiourl
    }
  }
`

const PUZZLEITEM_INSERT = gql`
  mutation insert_puzzleitem($title: String!, $audiourl: String!) {
    insert_puzzleitem(objects: { title: $title, audiourl: $audiourl }) {
      returning {
        id
      }
    }
  }
`

const UPDATE_PUZZLEITEM = gql`
  mutation update_puzzleitem($id: Int!, $title: String!, $audiourl: String!) {
    update_puzzleitem(
      where: { id: { _eq: $id } }
      _set: { title: $title, audiourl: $audiourl }
    ) {
      affected_rows
    }
  }
`

const ARCHIVE_PUZZLEITEM = gql`
  mutation update_puzzleitem($id: Int!, $archived: Boolean!) {
    update_puzzleitem(
      where: { id: { _eq: $id } }
      _set: { archived: $archived }
    ) {
      affected_rows
    }
  }
`

const PUZZLEITEM_SUBSCRIPTION = gql`
  subscription {
    puzzleitem(order_by: { sequence: asc }) {
      id
      title
      audiourl
      archived
    }
  }
`

const Puzzleitems = () => {
  const { loading, data, refetch } = useQuery(PUZZLEITEM_QUERY, {
    onCompleted: () => {
      setPuzzleitems(data.puzzleitem)
      setCurrentPuzzleitem(initialFormState)
    },
  })
  const [dbInsertPuzzleitem] = useMutation(PUZZLEITEM_INSERT)
  const [dbUpdatePuzzleitem] = useMutation(UPDATE_PUZZLEITEM)
  const [dbArchivePuzzleitem] = useMutation(ARCHIVE_PUZZLEITEM)

  const initialFormState = { id: null, title: '', audiourl: '', deactivated: false }

  const [puzzleitems, setPuzzleitems] = useState(false)
  const [currentPuzzleitem, setCurrentPuzzleitem] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // Tell Apollo to update the query if there are any changes
  useSubscription(PUZZLEITEM_SUBSCRIPTION, {
    onSubscriptionData: () => {
      refetch()
    },
  })

  const addPuzzleitem = puzzleitem => {
    puzzleitem.id = -1
    setPuzzleitems([...puzzleitems, puzzleitem])
    dbInsertPuzzleitem({
      variables: { title: puzzleitem.title, audiourl: puzzleitem.audiourl },
    })
  }

  const deletePuzzleitem = id => {
    setEditing(false)
    setPuzzleitems(puzzleitems.filter(p => p.id !== id))
    dbArchivePuzzleitem({
      variables: { id: id, archived: true },
    })
  }

  const updatePuzzleitem = (id, updatedPuzzleitem) => {
    setEditing(false)
    setPuzzleitems(
      puzzleitems.map(puzzleitem =>
        puzzleitem.id === id ? updatedPuzzleitem : puzzleitem
      )
    )
    dbUpdatePuzzleitem({
      variables: updatedPuzzleitem,
    })
  }

  const editRow = puzzleitem => {
    setEditing(true)
    setCurrentPuzzleitem({
      id: puzzleitem.id,
      title: puzzleitem.title,
      audiourl: puzzleitem.audiourl ? puzzleitem.audiourl : '',
    })
  }

  return (
    <PuzzleitemsContainer>
      {editing ? (
        <EditorContainer>
          <FormHeaderStyle>Rætta</FormHeaderStyle>
          <EditPuzzleitemForm
            editing={editing}
            setEditing={setEditing}
            currentPuzzleitem={currentPuzzleitem}
            updatePuzzleitem={updatePuzzleitem}
          />
        </EditorContainer>
      ) : (
        <EditorContainer>
          <FormHeaderStyle>Stovna</FormHeaderStyle>
          <AddPuzzleitemForm addPuzzleitem={addPuzzleitem} />
        </EditorContainer>
      )}
      {loading ? (
        'Loading...'
      ) : (
        <PuzzleTable
          puzzleitems={puzzleitems}
          editRow={editRow}
          deletePuzzleitem={deletePuzzleitem}
        />
      )}
    </PuzzleitemsContainer>
  )
}

export default Puzzleitems
