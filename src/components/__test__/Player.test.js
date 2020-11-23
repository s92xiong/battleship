import Player from '../Player';

test('Gameboard function exists', () => expect(Player).toBeDefined());

test("Player picks a random item in the array", () => {
  // Computer selects any items in the array which are not true and should be undefined
  const board = Array(10).fill().map(array => Array(10).fill(true));
  board[0][0] = undefined;
  expect(Player(board).selectCoordinates()).toBeUndefined();
});