import React, { useState } from 'react';
import './App.css';
import { autoPlacePlayerShips, autoPlaceComputerShips } from './components/autoPlacement';
import Gameboard from './components/Gameboard';
import RenderGrid from './components/RenderGrid.jsx';
import RenderButtons from './components/RenderButtons';

function App() {
  // Initialize state for player and computer battleship board
  const [playerBoard, setPlayerBoard] = useState(Array(10).fill([]).map(array => Array(10).fill(null)));
  const [computerBoard, setComputerBoard] = useState(Array(10).fill([]).map(array => Array(10).fill(null)));

  // Get objects from Gameboard using player and computer board state
  const { 
    placeShip: placePlayerShip,  
    clearBoard,
  } = Gameboard(playerBoard, setPlayerBoard);
  
  const { 
    placeShip: placeComputerShip,
  } = Gameboard(computerBoard, setComputerBoard);

  const startGame = () => {
    // Add ships to computer board
    autoPlaceComputerShips(placeComputerShip, computerBoard, setComputerBoard)
    // Check if the game is valid to start
    let sum = 0;
    playerBoard.forEach(arr => arr.forEach(square => (square !== null) ? sum++ : sum));
    computerBoard.forEach(arr => arr.forEach(square => (square !== null) ? sum++ : sum));
    if (sum === 34) console.log("There are 34 valid squares on the board!");
  };

  const autoPlaceShips = () => {
    autoPlacePlayerShips(placePlayerShip, playerBoard, setPlayerBoard);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 data-testid="battleship-id">BATTLESHIP</h1>
      </div>
      <div className="container">
        <RenderGrid className="player-board" board={playerBoard} boardType="player" />
        <RenderGrid className="pc-board" board={computerBoard} boardType="pc" />
      </div>
      <RenderButtons 
        playButton={startGame}
        shuffleButton={autoPlaceShips}
        deleteButton={clearBoard}
      />
    </div>
  );
}
   
export default App;