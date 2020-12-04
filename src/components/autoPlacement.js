const clearBoard = (board) => {
  // Empty array of any potenital pre-existing ships before adding ships onto the board
  const newBoard = [...board];
  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[i].length; j++) {
      if (newBoard[i][j] === "ship") newBoard[i][j] = null;
    }
  }
  return newBoard;
};

const autoPlacePlayerShips = (playerShips, placePlayerShip, playerBoard, setPlayerBoard) => {
  setPlayerBoard(clearBoard(playerBoard));
  // Iterate through the ship object to get the shipLength and orientation, x and y is left as null
  for (const key in playerShips) {
    placePlayerShip(playerShips[key].array.length, null, null, playerShips[key].orientation);
  }
};

const autoPlaceComputerShips = (computerShips, placeComputerShip, computerBoard, setComputerBoard) => {
  setComputerBoard(clearBoard(computerBoard));
  for (const key in computerShips) {
    placeComputerShip(computerShips[key].array.length, null, null, computerShips[key].orientation);
  }
};

export { autoPlacePlayerShips, autoPlaceComputerShips };