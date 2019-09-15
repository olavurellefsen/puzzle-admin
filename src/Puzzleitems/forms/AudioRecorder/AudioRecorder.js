import React, { useState } from 'react'
import { ReactMic } from 'react-mic'
import { FaCircle, FaStop, FaPlay } from 'react-icons/fa'
import styled from 'styled-components'

const AudioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`

const RecordButtonStyle = styled.button`
  padding: 0px;
  margin-right: 30px;
  font-size: 40px;
  border: 0px;
  color: red;
  background-color: transparent;
`

const PlayButtonStyle = styled.button`
  padding: 0px;
  margin-right: 30px;
  font-size: 40px;
  border: 0px;
  background-color: transparent;
`

const AudioChartStyle = styled.div`
  margin: 10px;
`

const AudioRecorder = props => {
  const [recording, setRecording] = useState(false)
  const [audiourl, setAudiourl] = useState(props.audiourl)

  const onData = recordedBlob => {
    // console.log('chunk of real-time data is: ', recordedBlob)
  }

  const onStop = recordedBlob => {
    //console.log('recordedBlob is: ', recordedBlob)
    props.updateAudio(recordedBlob)
    setAudiourl(recordedBlob.blobURL)
  }

  const play = () => {
    let playAudio = new Audio(audiourl)
    playAudio.play()
  }

  return (
    <AudioContainer>
      {!recording && (
        <RecordButtonStyle onClick={() => setRecording(true)} type="button">
          <FaCircle />
        </RecordButtonStyle>
      )}
      {recording && (
        <RecordButtonStyle onClick={() => setRecording(false)} type="button">
          <FaStop />
        </RecordButtonStyle>
      )}
      {audiourl && (
        <PlayButtonStyle onClick={() => play()} type="button">
          <FaPlay />
        </PlayButtonStyle>
      )}
      <AudioChartStyle>
        <ReactMic
          record={recording}
          className="sound-wave"
          onStop={blob => onStop(blob)}
          onData={blob => onData(blob)}
          strokeColor="#000000"
          backgroundColor="#cccccc"
          width={400}
          height={100}
        />
      </AudioChartStyle>
    </AudioContainer>
  )
}

export default AudioRecorder
