import Gameboard from '../Gameboard';
import Ship from '../Ship';

test('Gameboard function exists', () => expect(Gameboard).toBeDefined());
// test("Gameboard grid size is 10x10", () => {
//   expect(Gameboard.length).toEqual(10); 
// });

test("Ship placed @ 1-1 w/ shipLength of 2 squares, horizontal orientation", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(2), 1, 1);
  expect(gameboard.board[1][1]).toBe("ship");
  expect(gameboard.board[2][1]).toBe("ship");
  expect(gameboard.board[3][1] && gameboard.board[1][2]).toBeUndefined();
});
