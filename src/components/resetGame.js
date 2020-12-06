const resetGame = (setPlayerBoard, setBoardPC, setGameValid, setGameStarted, setGameOver, setWinner) => {
  setPlayerBoard(Array(10).fill([]).map(array => Array(10).fill(null)));
  setBoardPC(Array(10).fill([]).map(array => Array(10).fill(null)));
  setGameValid(false);
  setGameStarted(false);
  setGameOver(false);
  setWinner(undefined);
};

export default resetGame;