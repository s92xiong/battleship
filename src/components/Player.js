function Player(gameboard) {
  let isPlayerTurn = true;

  let randomX, randomY;

  // Computer selects random coordinate that has not yet been selected
  const selectCoordinates = () => {
    // REFACTOR THIS CODE LATER, selecting board[9][9] will result in a logic error due to iteration
    randomX = Math.floor(Math.random() * 10);
    randomY = Math.floor(Math.random() * 10);
    const randomItem = gameboard[randomX][randomY];
    if (randomItem === true || randomItem === "hit") {
      return selectCoordinates();
    }
    return randomItem;
  };
  
  return {
    isPlayerTurn,
    selectCoordinates,
  };
}

export default Player;