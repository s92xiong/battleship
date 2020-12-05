const clearArray = (board) => {
  // Empty array of any potenital pre-existing ships before adding ships onto the board
  const newBoard = [...board];
  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[i].length; j++) {
      if (newBoard[i][j] === "ship") newBoard[i][j] = null;
    }
  }
  return newBoard;
};

export default clearArray;