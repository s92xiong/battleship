import Gameboard from '../Gameboard';
import Ship from '../Ship';

test("Ship placed @ 1-1 w/ shipLength of 2 squares, horizontal orientation", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(2), 1, 1);
  expect(gameboard.board[1][1]).toBe("ship");
  expect(gameboard.board[2][1]).toBe("ship");
  expect(gameboard.board[3][1] && gameboard.board[1][2]).toBeUndefined();
});

test("Ship is hit at 1-1", () => {
  const shipObj = Ship(2);
  const gameboard = Gameboard();
  gameboard.placeShip(shipObj, 1, 1);
  gameboard.receiveAttack(shipObj, 1, 1);
  expect(gameboard.board[1][1]).toBeTruthy();
});

test("All ships have been sunk", () => {
  const shipObj = Ship(2);
  const gameboard = Gameboard();
  gameboard.placeShip(shipObj, 1, 1);
  gameboard.receiveAttack(shipObj, 1, 1);
  gameboard.receiveAttack(shipObj, 2, 1);
  expect(gameboard.allShipsSunk(2)).toBeTruthy();
});