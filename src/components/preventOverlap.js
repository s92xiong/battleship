const preventOverlap = (ship, x, y, board, setBoard, coordinates, setCoordinates) => {
  const temp = [...board];
  // Iterate through the ship array
  for (let i = 0; i < ship.array.length; i++) {
    let isOverlap;
    if (ship.orientation === "horizontal") {
      const coordinate = `${y}-${x + i}`;
      // Determine if there will be overlap with the given ship array
      for (let j = 0; j < ship.array.length; j++) {
        let coords = `${y}-${x + j}`;
        if (coordinates.includes(coords)) isOverlap = true;
      }
      // If there's no overlap, place the ship on the board, otherwise break loop to prevent it from starting
      if (!isOverlap) {
        temp[y][x + i] = "ship";
        setBoard(temp);
        setCoordinates([...coordinates, coordinate]);
      } else {
        break;
      }
      // Repeat code above but for vertical orientation
    } else if (ship.orientation === "vertical") {
      const coordinate = `${y + i}-${x}`;
      for (let j = 0; j < ship.array.length; j++) {
        let coords = `${y + j}-${x}`;
        if (coordinates.includes(coords)) isOverlap = true;
      }
      if (!isOverlap) {
        temp[y + i][x] = "ship";
        setBoard(temp);
        setCoordinates([...coordinates, coordinate]);
      } else {
        break;
      }
    }
  }
  console.table(board);
};

export default preventOverlap;

    // console.log(sum);

    // playerArray.sort((a, b) => a - b).forEach((num, i) => {
    //   if (num === playerArray[i + 1]) {
    //     placeShip();
    //   }
    // });

    // console.log(playerArray);


    // console.table(board);

    // for (let i = 0; i < ship.array.length; i++) {
    //   const box = (orientation === "horizontal") ? newBoard[y][x + i] : newBoard[y + i][x];
    //   if (box === "ship") {
    //     console.log("There is overlap!");
    //     return;
    //   }
    // }

    // for (let i = 0; i < ship.array.length; i++) {
    //   (orientation === "horizontal") ? newBoard[y][x + i] = "ship" : newBoard[y + i][x] = "ship";
    //   setBoard(newBoard);
    // }