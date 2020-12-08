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

  const receiveAttack = (xC, yC, attacker) => {
    // Copy board and and xy coordinates
    const newBoard = [...board];
    let x = xC, y = yC;
    
    // PC picks random coordinates to attack
    if (attacker === "pc") {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    if (newBoard[y][x] === "hit" || newBoard[y][x] === "miss") {
      if (attacker === "pc") {
        // Recursively call receiveAttack until PC picks valid coordinates
        return receiveAttack(null, null, "pc");
      } else {
        // If player clicks on a square that already contains "ship" or "miss" then function returns true
        return true;
      }
    }

    if (newBoard[y][x] === "ship") newBoard[y][x] = "hit";
    else if (newBoard[y][x] === null) newBoard[y][x] = "miss";
    setBoard(newBoard);
  };

  const allShipsSunk = (opponentBoard, setGameOver, setWinner, attacker) => {
    let tempString = attacker;
    let sum = 0;
    opponentBoard.forEach(row => row.forEach(square => (square === "hit") ? sum++ : null));
    if (sum === 17) {
      setGameOver(true);
      setWinner(tempString);
      // console.log(tempString);
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