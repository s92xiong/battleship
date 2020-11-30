import React, { useState } from 'react';
import Gameboard from './components/Gameboard';
import RenderGrid from './components/RenderGrid.jsx';
import './App.css';
import RenderButtons from './components/RenderButtons';

function App() {
  const [playerBoard, setPlayerBoard] = useState(Array(10).fill().map(array => Array(10).fill(undefined)));

  // eslint-disable-next-line no-unused-vars
  const { placeShip } = Gameboard(playerBoard, setPlayerBoard);
  
  const autoplace = () => {
    placeShip(2, null, null, null);
    placeShip(3, null, null, null);
    placeShip(3, null, null, null);
    placeShip(4, null, null, null);
    placeShip(5, null, null, null);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>BATTLESHIP</h1>
      </div>
      <div className="container">
        <RenderGrid className="player-board" board={playerBoard} />
        <RenderGrid className="pc-board" board={playerBoard} />
      </div>
      <RenderButtons handleClick={autoplace} />
    </div>
  );
}
   
export default App;