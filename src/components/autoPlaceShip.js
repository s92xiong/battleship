const autoPlaceShip = (board, setBoard, checkPlayerArray, shipLength, x, y, orientation) => {
  const max = 10 - shipLength;

  const newBoard = [...board];
  // const ship = Ship(shipLength, orientation);

  let bool = true;
  while (bool === true) {
    let breakForLoop = false;

    // Randomly pick x & y coordinates and orientation
    if (orientation === null || x === null || y === null) {
      orientation = ((Math.floor(Math.random() * 10) + 1) > 5) ? "horizontal" : "vertical";
      x = Math.floor(Math.random() * (max - 0 + 1)) + 0;
      y = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }

    // Prevent Overlap
    for (let i = 0; i < shipLength; i++) {
      const square = (orientation === "horizontal") ? newBoard[y][x + i] : newBoard[y + i][x];
      if (square === "ship") break;
      breakForLoop = false;
    }

    // Escape Loop
    if (breakForLoop) break;
  }

  for (let i = 0; i < shipLength; i++) {
    if (orientation === "horizontal") {
      newBoard[y][x + i] = "ship";
      checkPlayerArray.push(`${x + i}${y}`)
    } else {
      newBoard[y + i][x] = "ship";
      checkPlayerArray.push(`${x}${y + i}`)
    }
  }

  console.log(newBoard);
  setBoard(newBoard);
}

export default autoPlaceShip;