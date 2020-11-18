import Ship from '../Ship';

test('Ship function exists', () => expect(Ship).toBeDefined());
test('Ship returns an object', () => expect(typeof Ship()).toBe("object"));

test("Ship length", () => {
  const shipLength = Ship(2);
  expect(shipLength.array.length).toBe(2);
});

test("Ship has been hit", () => {
  const shipLength = Ship(4);
  shipLength.hit(shipLength.array, 2);
  expect(shipLength.array).toEqual([false, false, true, false]);
});

test("Ship is sunk", () => {
  const shipLength = Ship(4);
  shipLength.array.fill(true);
  expect(shipLength.isSunk(shipLength.array)).toBeTruthy();
});