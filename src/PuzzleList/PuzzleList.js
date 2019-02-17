import React, { useContext } from 'react';
import MainContext from '../Context';
import Puzzle from './Puzzle/Puzzle';
import { PuzzleListContainer } from './PuzzleList.style';
import puzzleData from './PuzzleData';

const PuzzleList = () => {
  const puzzles = puzzleData.data.puzzle;
  const [state] = useContext(MainContext);
  return (
    <PuzzleListContainer>
      {puzzles.filter((puzzle) => puzzle.scene_id===state.currentScene).map((puzzle, index) => 
        <Puzzle key={index} puzzle={puzzle}/>
      )}
    </PuzzleListContainer>
  );
};

export default PuzzleList;
