function User(gameboard, x, y) {
  let isPlayerTurn = true;

  // Computer selects random coordinate that has not yet been selected
  const selectCoordinates = () => {
    const randomItem = gameboard[x][y];
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

export default User;