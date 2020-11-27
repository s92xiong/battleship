const preventOverlap = (ship, x, y, board, setBoard, coordinates, setCoordinates) => {
  const newBoard = [...board];
  // Iterate through the ship array
  for (let i = 0; i < ship.array.length; i++) {
    let isOverlap;
    if (ship.orientation === "horizontal") {
      const newCoord = `${y}-${x + i}`;
      // Determine if there will be overlap with the given ship array
      for (let j = 0; j < ship.array.length; j++) {
        let tempCoord = `${y}-${x + j}`;
        if (coordinates.includes(tempCoord)) isOverlap = true;
      }
      // If there's no overlap, place the ship on the board, else break loop to prevent it from starting
      if (!isOverlap) {
        newBoard[y][x + i] = "ship";
        setBoard(newBoard);
        setCoordinates([...coordinates, newCoord]);
      } else {
        break;
      }
      // Repeat code above but for vertical orientation
    } else if (ship.orientation === "vertical") {
      const newCoord = `${y + i}-${x}`;
      for (let j = 0; j < ship.array.length; j++) {
        let tempCoord = `${y + j}-${x}`;
        if (coordinates.includes(tempCoord)) isOverlap = true;
      }
      if (!isOverlap) {
        newBoard[y + i][x] = "ship";
        setBoard(newBoard);
        setCoordinates([...coordinates, newCoord]);
      } else {
        break;
      }
    }
  }
  console.table(board);
};

export default preventOverlap;