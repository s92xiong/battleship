function Gameboard() {
  // Create an array with 10 elements--the element is an array containing 10 elements
  const board = Array(10).fill().map(array => Array(10));
  
  // Determine ship placement on board, (ship is executed as an argument)
  const placeShip = (ship, x, y) => (ship.isVertical) ? 
  ship.array.forEach((el, i) => board[x][y + i] = "occupied") : 
  ship.array.forEach((el, i) => board[x + i][y] = "occupied");

  
}

export default Gameboard;