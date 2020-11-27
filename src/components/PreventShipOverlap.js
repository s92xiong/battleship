const PreventShipOverlap = (ship, x, y, board, setBoard, coordinateArray, setCoordinateArray) => {
  const temp = [...board];
  // Iterate through the ship array
  for (let i = 0; i < ship.array.length; i++) {
    let isOverlap;
    if (ship.orientation === "horizontal") {
      const coordinate = `${y}-${x + i}`;
      // Determine if there will be overlap with the given ship array
      for (let j = 0; j < ship.array.length; j++) {
        let coords = `${y}-${x + j}`;
        if (coordinateArray.includes(coords)) isOverlap = true;
      }
      // If there's no overlap, place the ship on the board, otherwise break loop to prevent it from starting
      if (!isOverlap) {
        temp[y][x + i] = "ship";
        setBoard(temp);
        setCoordinateArray([...coordinateArray, coordinate]);
      } else {
        break;
      }
      // Repeat code above but for vertical orientation
    } else if (ship.orientation === "vertical") {
      const coordinate = `${y + i}-${x}`;
      for (let j = 0; j < ship.array.length; j++) {
        let coords = `${y + j}-${x}`;
        if (coordinateArray.includes(coords)) isOverlap = true;
      }
      if (!isOverlap) {
        temp[y + i][x] = "ship";
        setBoard(temp);
        setCoordinateArray([...coordinateArray, coordinate]);
      } else {
        break;
      }
    }
  }
  console.table(board);
};

export default PreventShipOverlap;