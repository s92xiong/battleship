function Player(gameboard) {
  let isPlayerTurn = true;

  let randomX, randomY;

  const selectCoordinates = () => {
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