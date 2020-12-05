import React, { useEffect, useState } from 'react';
import './App.css';
import { autoplacePlayerShips, autoplaceShipsPC } from './components/autoplaceShips';
import clearArray from './components/clearArray';
import Gameboard from './components/Gameboard';
import RenderBoard from './components/RenderBoards.jsx';
import RenderButtons from './components/RenderButtons';
import Ship from './components/Ship';

function App() {
  
  console.clear();
  
  // Determine if all conditions are met for the game to begin
  const [isGameValid, setGameValid] = useState(false);
  
  // Determine WHEN the game has officially started
  const [gameHasStarted, setGameStarted] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [whoseTurnIsIt, setTurn] = useState("player");

  // eslint-disable-next-line no-unused-vars
  const [ships, setShips] = useState({
    playerShips: [ Ship(2, null), Ship(3, null), Ship(3, null), Ship(4, null), Ship(5, null)],
    pcShips: [ Ship(2, null), Ship(3, null), Ship(3, null), Ship(4, null), Ship(5, null)],
  });
  
  // Initialize array state for player and computer battleship board
  const [playerBoard, setPlayerBoard] = useState(Array(10).fill([]).map(array => Array(10).fill(null)));
  const [pcBoard, setBoardPC] = useState(Array(10).fill([]).map(array => Array(10).fill(null)));
  
  // Return objects from Gameboard using player & computer state as arguments
  const { 
    placeShip: placePlayerShip, 
    receiveAttack: playerReceivesAttack,
  } = Gameboard(playerBoard, setPlayerBoard);
  
  const { 
    placeShip: placeShipPC,
    receiveAttack: pcReceivesAttack,
  } = Gameboard(pcBoard, setBoardPC);
  
  useEffect(() => {
    console.log("PROJECT BATTLESHIP");
  });

  const handleStartGame = () => {
    // If prerequisites to start game are valid, place computer ships on board & set state to true
    if (isGameValid) {
      autoplaceShipsPC(ships.pcShips, placeShipPC, pcBoard, setBoardPC);
      setGameStarted(true);
    }
  };

  const handleShuffleButton = () => {
    autoplacePlayerShips(ships.playerShips, placePlayerShip, playerBoard, setPlayerBoard);
    // Ensure all player ships have been placed on the baord
    let sum = 0;
    playerBoard.forEach(arr => arr.forEach(square => (square !== null) ? sum++ : sum));
    if (sum === 17) setGameValid(true);
  };

  const handleDeleteShips = () => {
    // Remove ships from player board
    setPlayerBoard(clearArray(playerBoard));
    setGameValid(false);
  };

  // Do stuff when the user clicks on a square
  const clickOnSquare = (e) => {
    // Obtain string value from element name of the tareget clicked on
    const array = e.target.getAttribute("name").split("");
    const y = Number(array[0]);
    const x = Number(array[1]);
    pcReceivesAttack(x, y);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 data-testid="battleship-id">BATTLESHIP</h1>
      </div>
      <div className="container">
        <RenderBoard 
          board={playerBoard} 
          boardType="player"
          className="player-board"
        />
        <RenderBoard 
          board={pcBoard} 
          boardType="pc"
          className={((!gameHasStarted) ? "pc-board-none": "pc-board")} 
          handleClick={clickOnSquare}
        />
      </div>
      <RenderButtons
        gameStart={gameHasStarted}
        gameValid={isGameValid}
        playButton={handleStartGame}
        shuffleButton={handleShuffleButton}
        deleteButton={handleDeleteShips}
      />
    </div>
  );
}
   
export default App;