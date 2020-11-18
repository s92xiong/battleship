function Ship(length) {
  // Create a new array and fill all elements with the value false
  const newArray = new Array(length);
  newArray.fill(false);

  // Target the ship's hit box
  const hit = (array, x, y) => array[x][y] = true;
  
  // If all elements in the array return true, then the ship is sunk
  const isSunk = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === true) sum++;
    }
    if (sum === array.length) {
      return true;
    } else {
      return false;
    }
  };

  return {
    array: newArray,
    isVertical: false,
    hit,
    isSunk,
  };
}

export default Ship;