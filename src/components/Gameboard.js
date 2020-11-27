import preventOverlap from "./preventOverlap";
import Ship from "./Ship";

function Gameboard (board, setBoard, coordinates, setCoordinates) {
  
  const placeShip = (shipLength, orientation, x, y) => {
    return () => {
      // "coordinates" is an array of strings, iterate through this array to check if overlap occurs
      preventOverlap(Ship(shipLength, orientation), x, y, board, setBoard, coordinates, setCoordinates);
    };
  };

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