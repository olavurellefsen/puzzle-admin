import React from "react";
import Puzzle from "./Puzzle/Puzzle";
import { PuzzleListContainer } from "./PuzzleList.style";

const PuzzleList = () => {
  const puzzles = [0,1,2,3,4,5];
  return (
    <PuzzleListContainer>
      {puzzles.map((puzzle, index) => 
        <Puzzle key={index} puzzleId={puzzle}/>
      )}
    </PuzzleListContainer>
  );
};

export default PuzzleList;
