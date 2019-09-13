import React, { useState, useContext, useRef, useEffect } from 'react'
import { capitalizeFirstLetter } from '../../Utils/Utils'
import MainContext from '../../Store/Context'
import {
  PuzzleitemContainer,
  PuzzleitemImage,
  PuzzleitemTitleForm,
  PuzzleitemTitle,
  PuzzleitemPlayBox,
  PuzzleitemPlayBoxText,
} from './Puzzleitem.style'
import { FaMusic } from 'react-icons/fa'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

export default props => {
  const [state, dispatch] = useContext(MainContext)
  let { id, title, imageurl, audiourl } = props.puzzleitem
  title = capitalizeFirstLetter(title)
  const [titleField, setTitleField] = useState(title)
  const puzzleitemTitle = useRef(null)

  useEffect(() => {
    if(props.newItem) puzzleitemTitle.current.focus()
  })

  //If the parent component is updated (someone else has changed the value), then update the field here
  if (
    title !== titleField &&
    title !== null &&
    puzzleitemTitle.current !== null
  ) {
    if (puzzleitemTitle.current.defaultValue === titleField) {
      setTitleField(title)
    }
  }

  const UPDATE_PUZZLEITEM = gql`
    mutation update_puzzleitem($id: Int!, $title: String!) {
      update_puzzleitem(where: { id: { _eq: $id } }, _set: { title: $title }) {
        affected_rows
      }
    }
  `

  const selected = state.currentPuzzleitem === id
  return (
    <PuzzleitemContainer
      selected={selected}
      onClick={() => {
        dispatch({ type: 'setCurrentPuzzleitem', number: id })
      }}
    >
      <PuzzleitemImage
        backgroundImage={imageurl}
        data-testid="PuzzleitemContainer"
      />
      <Mutation mutation={UPDATE_PUZZLEITEM}>
        {(updatePuzzleitemTitle, { data }) => (
          <PuzzleitemTitleForm
            onSubmit={e => {
              e.preventDefault()
              updatePuzzleitemTitle({
                variables: { id: id, title: titleField },
              })
              puzzleitemTitle.current.blur()
            }}
          >
            <PuzzleitemTitle
              ref={puzzleitemTitle}
              name="title"
              type="text"
              value={titleField}
              onChange={e => setTitleField(e.target.value)}
            />
          </PuzzleitemTitleForm>
        )}
      </Mutation>
      <PuzzleitemPlayBox
        audiourl={audiourl}
        onClick={() => {
          let playAudio = new Audio(audiourl)
          playAudio.play()
        }}
      >
        <PuzzleitemPlayBoxText>{audiourl && <FaMusic />}</PuzzleitemPlayBoxText>
      </PuzzleitemPlayBox>
    </PuzzleitemContainer>
  )
}
