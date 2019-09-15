import React from 'react'
import styled from 'styled-components'
import { FaMusic } from 'react-icons/fa'

const TableContainer = styled.div`
  margin: 30px 0px 0px 0px;
`

const TableStyle = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
  display: table;
  border-color: grey;
`

const TableHeadStyle = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`

const TableHeadRowStyle = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`

const ThStyle = styled.th`
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: left;
  padding: 0.5rem;
  border-bottom: 2px solid #666666;
`

const TableBodyStyle = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`

const TrStyle = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`

const TableitemStyle = styled.td`
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid #dedede;
  text-align: left;
  padding: 0.5rem;
`

const TableButtonStyle = styled.button`
  background: transparent;
  border: 1px solid #cdcdcd;
  color: #4e4e4e;
  display: inline-block;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: none;
  padding: 0.75rem 1.25rem;
  margin: 0 0.5rem 0 0;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
`

const PuzzleTable = ({ puzzleitems, editRow, deletePuzzleitem }) => {
  return (
    <TableContainer>
      <TableStyle>
        <TableHeadStyle>
          <TableHeadRowStyle>
            <ThStyle>Tekstur</ThStyle>
            <ThStyle>Ljóð</ThStyle>
            <ThStyle>Gerðir</ThStyle>
          </TableHeadRowStyle>
        </TableHeadStyle>
        <TableBodyStyle>
          {puzzleitems.length > 0 ? (
            puzzleitems.map((p,index) => (
              <TrStyle key={index}>
                <TableitemStyle>{p.title}</TableitemStyle>
                <TableitemStyle
                  onClick={() => {
                    if (p.audiourl) {
                      let playAudio = new Audio(p.audiourl)
                      playAudio.play()
                    }
                  }}
                >
                  {p.audiourl && <FaMusic />}
                </TableitemStyle>
                <TableitemStyle>
                  <TableButtonStyle
                    onClick={() => {
                      editRow(p)
                    }}
                    className="button muted-button"
                  >
                    Rætta
                  </TableButtonStyle>
                  <TableButtonStyle
                    onClick={() => deletePuzzleitem(p.id)}
                    className="button muted-button"
                  >
                    Strika
                  </TableButtonStyle>
                </TableitemStyle>
              </TrStyle>
            ))
          ) : (
            <TrStyle>
              <TableitemStyle colSpan={3}>Eingin lutur</TableitemStyle>
            </TrStyle>
          )}
        </TableBodyStyle>
      </TableStyle>
    </TableContainer>
  )
}
export default PuzzleTable
