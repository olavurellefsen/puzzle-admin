import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AudioRecorder from './AudioRecorder/AudioRecorder'
import uploadToFirebase from './uploadToFirebase'

const FormContainer = styled.div`
  margin: 0px;
`

const FormStyle = styled.form`
  display: block;
`

const LabelStyle = styled.label`
  font-weight: 600;
  max-width: 100%;
  display: block;
  margin: 1rem 0 0.5rem;
`

const InputStyle = styled.input`
  display: block;
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 0.75rem;
  outline: none;
  background: white;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  width: 80%;
  max-width: 80%;
  line-height: 1;
  overflow: visible;
  margin: 0;
`

const FormButton = styled.button`
  display: inline-block;
  border: 1px solid #0366ee;
  border-radius: 4px;
  background: #0366ee;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  text-transform: none;
  padding: 0.75rem 1.25rem;
  margin: 20px 0.5rem 20px 0px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
`

const EditPuzzleitemForm = props => {
  const [puzzleitem, setPuzzleitem] = useState(props.currentPuzzleitem)
  const [audio, setAudio] = useState()

  useEffect(() => {
    setPuzzleitem(props.currentPuzzleitem)
  }, [props])

  const handleInputChange = event => {
    const { title, value } = event.target
    setPuzzleitem({ ...puzzleitem, [title]: value })
  }

  return (
    <FormContainer>
      <FormStyle
        onSubmit={async event => {
          event.preventDefault()
          let newpuzzleitem = puzzleitem
          if (audio) {
            let newUrl = await uploadToFirebase(audio)
            newpuzzleitem = {
              id: puzzleitem.id,
              title: puzzleitem.title,
              audiourl: newUrl,
              key: puzzleitem.key
            }
            setPuzzleitem(newpuzzleitem)
          }          
          props.updatePuzzleitem(puzzleitem.id, newpuzzleitem)
        }}
      >
        <LabelStyle>Tekstur</LabelStyle>
        <InputStyle
          type="text"
          title="title"
          placeholder="Tekstur, sum skal vísast í spælinum"
          value={puzzleitem.title}
          onChange={handleInputChange}
        />
        <InputStyle
          type="text"
          title="key"
          placeholder="Tekstkoda"
          value={puzzleitem.key}
          onChange={handleInputChange}
        />        
        <LabelStyle>Ljóð</LabelStyle>
        <AudioRecorder audiourl={puzzleitem.audiourl} updateAudio={audio => setAudio(audio)} />
        <FormButton>Dagfør</FormButton>
        <FormButton onClick={() => props.setEditing(false)}>Angra</FormButton>
      </FormStyle>
    </FormContainer>
  )
}

export default EditPuzzleitemForm
