import React, { useEffect, useState } from 'react';
import './App.css';
import { autoplacePlayerShips, autoplaceShipsPC } from './components/autoplaceShips';
import clearArray from './components/clearArray';
import Gameboard from './components/Gameboard';
import RenderBoard from './components/RenderBoard.jsx';
import RenderButtons from './components/RenderButtons';
import Ship from './components/Ship';

function App() {
  
  // console.clear();
  
  // Initialize variable state to determine if all conditions are met for the game to begin
  const [isGameValid, setGameValid] = useState(false);
  
  // Initialize variable state to determine when the game has officially started
  const [gameStarted, setGameStarted] = useState(false);

  // Initialize variable state to determine when the game is over
  const [gameOver, setGameOver] = useState(false);

  const [winner, setWinner] = useState("");

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
    allShipsSunk: pcShipsSunk,
  } = Gameboard(playerBoard, setPlayerBoard);
  
  const { 
    placeShip: placeShipPC,
    receiveAttack: pcReceivesAttack,
    allShipsSunk: playerShipsSunk,
  } = Gameboard(pcBoard, setBoardPC);
  
  // EVENT HANDLERS: 
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

  // Do stuff when player clicks on the opponent's board
  const handleClickOnSquare = (e) => {
    if (gameOver) return;
    // Obtain string value from element name of the tareget clicked on
    const array = e.target.getAttribute("name").split("");
    const y = Number(array[0]);
    const x = Number(array[1]);

    // Player attacks PC board
    const preventDoubleSelection = pcReceivesAttack(x, y, "player");
    // If Player clicks on the same square twice, stop this function
    if (preventDoubleSelection) return;
    // Checks if PC ships are all sunk
    const didPlayerWin = pcShipsSunk(pcBoard, setGameOver, setWinner, "player");
    if (didPlayerWin) return;

    // PC attacks Player board
    playerReceivesAttack(null, null, "pc");
    // Checks if all Player ships are sunk
    const didPCWin = playerShipsSunk(playerBoard, setGameOver, setWinner, "pc");
    if (didPCWin) return;

    // Logic error fixed! Next step:
      // determine if PLAYER or PC won, and use that to make a modal that pops up and says "Player Wins", etc.
      // --> initialize a new variable state called "lastTurn", after every turn, set last turn to the player who
      // just made his turn, if the game is won, then the winner is the last person to have made his last move
      // don't forget to end the function immediately after the game has been won!
  };

  useEffect(() => {
    console.log(`The winner is......${winner}!`);
  });

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
          className={((!gameStarted) ? "pc-board-none": "pc-board")} 
          handleClick={handleClickOnSquare}
        />
      </div>
      <RenderButtons
        gameStart={gameStarted}
        gameValid={isGameValid}
        playButton={handleStartGame}
        shuffleButton={handleShuffleButton}
        deleteButton={handleDeleteShips}
      />
      <div>
        {
          (gameOver) ? <h1>Game is over!</h1> : undefined
        }
      </div>
    </div>
  );
}
   
export default App;