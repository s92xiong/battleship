import clearArray from "./clearArray";

const autoplacePlayerShips = (playerShips, placePlayerShip, playerBoard, setPlayerBoard) => {
  setPlayerBoard(clearArray(playerBoard));
  // Iterate through the ship object to get the shipLength and orientation
  for (const key in playerShips) {
    placePlayerShip(playerShips[key].array.length, null, null, playerShips[key].orientation);
  }
};

const autoplaceShipsPC = (pcShips, placePCShips, pcBoard, setPCBoard) => {
  setPCBoard(clearArray(pcBoard));
  for (const key in pcShips) {
    placePCShips(pcShips[key].array.length, null, null, pcShips[key].orientation);
  }
};

export { autoplacePlayerShips, autoplaceShipsPC };