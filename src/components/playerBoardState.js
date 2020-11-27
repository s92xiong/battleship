import { useState } from "react";
import PreventShipOverlap from "./PreventShipOverlap";
import Ship from "./Ship";

const PlayerBoardState = () => {
  const [playerBoard, setPlayerBoard] = useState(Array(10).fill().map(array => Array(10).fill(undefined)));
  const [playerCoordinates, setPlayerCoordinates] = useState([]);

  const PlaceShip = (shipLength, orientation, x, y) => {
    const handler = () => {
      PreventShipOverlap(Ship(shipLength, orientation), x, y, playerBoard, setPlayerBoard, playerCoordinates, setPlayerCoordinates);
    };
    return handler;
  };

  return {
    PlaceShip, playerBoard
  };
};

export default PlayerBoardState;