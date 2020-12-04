function Ship(length, orientation) {
  // Create a new array and fill all elements with the value false
  const newArray = new Array(length);
  newArray.fill(false);

  // Target the ship's hit box on the board
  const hit = (array) => array.splice(0, 1);
  
  // If the array is undefined or its length is less than 1, the ship is sunk
  const shipIsSunk = (array) => (array === undefined || array.length < 1) ? true : false;

  return {
    array: newArray,
    orientation: orientation,
    hit,
    shipIsSunk,
  };
}

export default Ship;