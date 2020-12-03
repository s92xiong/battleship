import React, { useState } from 'react';
import './App.css';
import { autoPlacePlayerShips, autoPlaceComputerShips } from './components/autoPlacement';
import Gameboard from './components/Gameboard';
import RenderGrid from './components/RenderBoards.jsx';
import RenderButtons from './components/RenderButtons';

function App() {
  // Initialize variable state to determine if all conditions are met for the game to begin
  const [isStartGameValid, setGameValid] = useState(false);

  // Initialize variable state to mark the point at which the game has begun
  const [isGameStarted, setGameStarted] = useState(false);

  // Initialize array state for player and computer battleship board
  const [playerBoard, setPlayerBoard] = useState(Array(10).fill([]).map(array => Array(10).fill(null)));
  const [computerBoard, setComputerBoard] = useState(Array(10).fill([]).map(array => Array(10).fill(null)));

  // Return objects from Gameboard using player & computer state as arguments
  const { placeShip: placePlayerShip, clearBoard } = Gameboard(playerBoard, setPlayerBoard);
  const { placeShip: placeComputerShip } = Gameboard(computerBoard, setComputerBoard);

  // If conditions are valid to start game, place ships on computer's board and set state to true
  const startGame = () => {
    if (isStartGameValid) {
      autoPlaceComputerShips(placeComputerShip, computerBoard, setComputerBoard);
      setGameStarted(true);
    }
  };

  // When shuffle button is clicked, randomly & automatically place ships on the player's board
  const autoPlaceShips = () => {
    autoPlacePlayerShips(placePlayerShip, playerBoard, setPlayerBoard);
    // Ensure all ships have been placed on the baord for  
    let sum = 0;
    playerBoard.forEach(arr => arr.forEach(square => (square !== null) ? sum++ : sum));
    if (sum === 17) setGameValid(true);
  };

  // Remove ships from player board when trash button is clicked
  const deleteShips = () => {
    clearBoard();
    setGameValid(false);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 data-testid="battleship-id">BATTLESHIP</h1>
      </div>
      <div className="container">
        <RenderGrid className="player-board" board={playerBoard} boardType="player" />
        <RenderGrid className={((!isGameStarted) ? "pc-board-none": "pc-board")} board={computerBoard} boardType="pc" />
      </div>
      <RenderButtons
        gameStarted={isGameStarted}
        gameValid={isStartGameValid}
        playButton={startGame}
        shuffleButton={autoPlaceShips}
        deleteButton={deleteShips}
      />
    </div>
  );
}
   
export default App;