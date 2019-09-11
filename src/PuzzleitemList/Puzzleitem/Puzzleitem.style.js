import styled from 'styled-components'

export const PuzzleitemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  width: 100%;
  margin: 10px;
  opacity: ${props => (props.selected ? 1 : 0.5)};
`

export const PuzzleitemImage = styled.div`
  height: 90px;
  width: 90px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,${props => (props.selected ? 0.4 : 0.2)});
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
  }
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
`

export const PuzzleitemTitleForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  margin: 10px;
  background: #bbb;
`

export const PuzzleitemTitle = styled.input`
  display: block;
  margin: auto auto;
  color: black;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  text-align: center;
`

export const PuzzleitemPlayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 40px;
  margin: 10px;
  background: #bbb;
  opacity: ${props => (props.audiourl ? 1 : 0)};
`

export const PuzzleitemPlayBoxText = styled.div`
  align-self: center;
`
