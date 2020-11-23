function Ship(length, orientation) {
  // Create a new array and fill all elements with the value false
  const newArray = new Array(length);
  newArray.fill(false);

  // Target the ship's hit box on board
  const hit = (array) => array.splice(0, 1);
  
  // If all elements in the array return true, then the ship is sunk
  const isSunk = (array) => (array === undefined || array.length < 1) ? true : false;

  return {
    array: newArray,
    orientation: orientation,
    hit,
    isSunk,
  };
}

export default Ship;