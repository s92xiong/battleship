import { useState } from 'react';
import './App.css';
import RenderGrid from './components/RenderGrid.jsx';
import Ship from './components/Ship';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [overlapArray, setOverlapArray] = useState([]);

  // Determine ship placement on board, (ship is executed as an argument)
  const placeShip = (ship, board, setBoard, x, y) => {
    const temp = [...board];
    for (let i = 0; i < ship.array.length; i++) {
      let isOverlap;
      if (ship.orientation === "horizontal") {
        // Determine if there will be overlap with the given ship array
        const coordinate = `${y}-${x + i}`;
        for (let j = 0; j < ship.array.length; j++) {
          let coords = `${y}-${x + j}`;
          if (overlapArray.includes(coords)) isOverlap = true;
        }
        // If there's no overlap, place the ship on the board, if there is overlap prevent loop from starting
        if (!isOverlap) {
          temp[y][x + i] = "ship";
          setBoard(temp);
          setOverlapArray([...overlapArray, coordinate]);
        } else {
          break;
        }
      } else if (ship.orientation === "vertical") {
        const coordinate = `${y + i}-${x}`;
        // Check if overlapArray already contains boxes in the array
        for (let j = 0; j < ship.array.length; j++) {
          let coords = `${y + j}-${x}`;
          if (overlapArray.includes(coords)) isOverlap = true;
        }
        if (!isOverlap) {
          temp[y + i][x] = "ship";
          setBoard(temp);
          setOverlapArray([...overlapArray, coordinate]);
        } else {
          break;
        }
      }
    }
  };

  const [playerBoard, setPlayerBoard] = useState(Array(10).fill().map(array => Array(10).fill(undefined)));

  // const [shipSpots, setShipSpots] = useState({
  //   Ship1: placeShip(Ship(2), playerBoard, setPlayerBoard, 0, 0),
  //   Ship2: placeShip(Ship(3), playerBoard, setPlayerBoard, 0, 2),
  //   Ship3: placeShip(Ship(3), playerBoard, setPlayerBoard, 0, 4),
  //   Ship4: placeShip(Ship(4), playerBoard, setPlayerBoard, 0, 6),
  //   Ship5: placeShip(Ship(5), playerBoard, setPlayerBoard, 0, 8),
  // });

  // useEffect(() => {
  //   console.table(playerBoard);
  // });

  // useEffect(() => {
  //   setPlayerBoard(playerBoard);
  // }, [playerBoard]);

  const renderShip = (shipLength, orientation, num1, num2) => {
    const handler = () => {
      placeShip(Ship(shipLength, orientation), playerBoard, setPlayerBoard, num1, num2);
    };
    return handler;
  }
  
  return (
    <div className="App">
      <div className="header">
        <h1>BATTLESHIP</h1>
      </div>
      <div className="container">
        <RenderGrid className="player-board" board={playerBoard} />
        <RenderGrid className="pc-board" board={playerBoard} />
        <button onClick={renderShip(4, "vertical", 3, 0)}>Place 1st Ship</button>
        <button onClick={renderShip(4, "horizontal", 0, 3)}>Place 2nd Ship</button>
        {/* <button onClick={renderShip(3, "horizontal", 0, 4)}>Place 3rd Ship</button>
        <button onClick={renderShip(4, "horizontal", 0, 6)}>Place 4th Ship</button>
        <button onClick={renderShip(5, "horizontal", 0, 8)}>Place 5th Ship</button> */}
      </div>
    </div>
  );
}
   
export default App;