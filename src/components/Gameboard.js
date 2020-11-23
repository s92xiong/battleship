function Gameboard(board) {
  // Create one array that contains 10 arrays, each array contains 10 elements
  // const board = Array(10).fill([]).map(array => Array(10).fill());
  
  // Determine ship placement on board, (ship is executed as an argument)
  const placeShip = (ship, x, y) => (ship.isVertical) ? 
    ship.array.forEach((el, i) => board[x][y + i] = "ship") : 
    ship.array.forEach((el, i) => board[x + i][y] = "ship");

  // Determine if attack hits a ship & record coordinates of missed shot
  const receiveAttack = (ship, x, y) => {
    if (board[x][y] === "ship") {
      board[x][y] = true;
      ship.hit(ship.array);
    } else {
      board[x][y] = "miss";
    }
    return board[x][y];
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
    board,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
}

export default Gameboard;