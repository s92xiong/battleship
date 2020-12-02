const autoPlacePlayerShips = (placePlayerShip, playerBoard, setPlayerBoard) => {
  const newBoard = [...playerBoard];
  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[i].length; j++) {
      if (newBoard[i][j] === "ship") {
        newBoard[i][j] = null;
      }
    }
  }
  setPlayerBoard(newBoard);
  placePlayerShip(2, null, null, null);
  placePlayerShip(3, null, null, null);
  placePlayerShip(3, null, null, null);
  placePlayerShip(4, null, null, null);
  placePlayerShip(5, null, null, null);
};

const autoPlaceComputerShips = (placeComputerShip, computerBoard, setComputerBoard) => {
  const newBoard = [...computerBoard];
  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[i].length; j++) {
      if (newBoard[i][j] === "ship") {
        newBoard[i][j] = null;
      }
    }
  }
  setComputerBoard(newBoard);
  placeComputerShip(2, null, null, null);
  placeComputerShip(3, null, null, null);
  placeComputerShip(3, null, null, null);
  placeComputerShip(4, null, null, null);
  placeComputerShip(5, null, null, null);
};

export { autoPlacePlayerShips, autoPlaceComputerShips };