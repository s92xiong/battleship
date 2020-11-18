function Gameboard() {
  // Create one array that contains 10 arrays, each array contains 10 elements
  const board = Array(10).fill([]).map(array => Array(10));
  
  // Determine ship placement on board, (ship is executed as an argument)
  const placeShip = (ship, x, y) => (ship.isVertical) ? 
    ship.array.forEach((el, i) => board[x][y + i] = "ship") : 
    ship.array.forEach((el, i) => board[x + i][y] = "ship");

  // "ship" is the object returned when you execute Ship(length)
  const receiveAttack = (ship, x, y) => {
    // Determine if attack hit a ship
    if (board[x][y] === "ship") {
      ship.hit(board, x, y);
    } else {
      board[x][y] = "miss"
    }
    // Record coordinates of missed shot
    return board[x][y];
  };

  const allShipsSunk = () => {
    // Iterate through the board array to see if all ships and its elements have been hit
    let outerSum = 0;
    const totalBoxes = 17;
    board.forEach(row => row.forEach(square => {
      if (square === true) outerSum++;
    }));
    (outerSum === totalBoxes) ? 
      console.log("All ships sunk") : 
      console.log("Enemy ships are still afloat");
  };

  return {
    board,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
}

export default Gameboard;