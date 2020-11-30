import Ship from "./Ship";

function Gameboard (board, setBoard) {
  
  const placeShip = (shipLength, x, y, orientation) => {
    const max = 10 - shipLength;

    const newBoard = [...board];
    // const ship = Ship(shipLength, orientation);

    // Randomly pick x & y coordinates and orientation
    if (orientation === null || x === null || y === null) {
      orientation = ((Math.floor(Math.random() * 10) + 1) > 5) ? "horizontal" : "vertical";
      x = Math.floor(Math.random() * (max - 0 + 1)) + 0;
      y = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }
  
    // Prevent Overlap
    for (let i = 0; i < shipLength; i++) {
      const square = (orientation === "horizontal") ? newBoard[y][x + i] : newBoard[y + i][x];
      if (square === "ship") {
        return placeShip(shipLength, null, null, null);
      }
    }

    for (let i = 0; i < shipLength; i++) {
      if (orientation === "horizontal") {
        newBoard[y][x + i] = "ship";
      } else {
        newBoard[y + i][x] = "ship";
      }
    }

    console.table(newBoard);
    setBoard(newBoard);
  }

  // Determine if attack hits a ship & record coordinates of missed shot
  const receiveAttack = (x, y) => {
    if (board[y][x] === "ship") {
      board[y][x] = true;
      Ship.hit(Ship.array);
    } else {
      board[y][x] = "miss";
    }
    return board[y][x];
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
    placeShip, receiveAttack, allShipsSunk,
  };
}

export default Gameboard;