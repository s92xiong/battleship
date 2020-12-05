function Gameboard (board, setBoard) {
  
  const placeShip = (shipLength, xC, yC, orientation) => {
    // Copy board and and xy coordinates
    const newBoard = [...board];
    let x = xC, y = yC;
    
    // "max" variable keeps ships placed within the board's boundaries
    const max = 10 - shipLength;

    // Randomly pick xy coordinates & orientation if user clicks on Shuffle Button
    if (orientation === null || x === null || y === null) {
      orientation = ((Math.floor(Math.random() * 10) + 1) > 5) ? "horizontal" : "vertical";
      x = Math.floor(Math.random() * (max - 0 + 1)) + 0;
      y = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }
  
    // Prevent Overlap if box contains the value "ship", is true recursively call placeShip
    for (let i = 0; i < shipLength; i++) {
      const square = (orientation === "horizontal") ? newBoard[y][x + i] : newBoard[y + i][x];
      if (square === "ship") return placeShip(shipLength, null, null, null);
    }

    // Add ships to the board's state
    for (let i = 0; i < shipLength; i++) {
      (orientation === "horizontal") ? newBoard[y][x + i] = "ship" : newBoard[y + i][x] = "ship";
    }
    setBoard(newBoard);
  };

  const receiveAttack = (x, y) => {
    const newBoard = [...board];
    if (newBoard[y][x] === "ship") newBoard[y][x] = "hit";
    else if (newBoard[y][x] === null) newBoard[y][x] = "miss";
    setBoard(newBoard);
  };

  const allShipsSunk = (totalBoxes) => {
    // Iterate through board array to see if all ships and its elements have been hit
    let outerSum = 0;
    // const totalBoxes = 17;
    board.forEach(row => row.forEach(square => {
      if (square === true) outerSum++;
    }));
    if (outerSum === totalBoxes) {
      return true;
    } else {
      return false;
    }
  };

  return {
    placeShip, receiveAttack, allShipsSunk
  };
}

export default Gameboard;