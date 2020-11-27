import React from 'react';
import './App.css';
import PlayerBoardState from './components/playerBoardState';

import RenderGrid from './components/RenderGrid.jsx';

function App() {
  // const [playerBoard, setPlayerBoard] = useState(Array(10).fill().map(array => Array(10).fill(undefined)));
  const { PlaceShip, playerBoard } = PlayerBoardState();
  
  // const [pcCoordinates, setPCCoordinates] = useState([]);
  // const [pcBoard, setPCBoard] = useState(Array(10).fill().map(array => Array(10).fill(undefined)));

  // NEXT STEPS:
  // (3) Unit test placeShip component --> give the component an overlap point, and test to see if it is overlapping
  
  return (
    <div className="App">
      <div className="header">
        <h1>BATTLESHIP</h1>
      </div>
      <div className="container">
        <RenderGrid className="player-board" board={playerBoard} />
        <RenderGrid className="pc-board" board={playerBoard} />
        <button 
          onClick={PlaceShip(4, "vertical", 3, 0)}
        >
          Place 1st Ship
        </button>
        <button 
          onClick={PlaceShip(4, "horizontal", 0, 3)}
        >
          Place 2nd Ship
        </button>
      </div>
    </div>
  );
}
   
export default App;