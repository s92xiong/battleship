import Ship from '../Ship';

test('Ship function exists', () => expect(Ship).toBeDefined());
test('Ship returns an object', () => expect(typeof Ship()).toBe("object"));

test("Ship length and orientation", () => {
  const shipLength = Ship(4, true);
  shipLength.hit(shipLength.array, 2);
  expect(shipLength.array.length).toBe(4);
  expect(shipLength.isVertical).toBeTruthy();
  expect(shipLength.array).toEqual([false, false, true, false]);
});

test("Ship is sunk", () => {
  const shipLength = Ship(4, true);
  shipLength.array = [true, true, true, true];
  expect(shipLength.isSunk(shipLength.array)).toBeTruthy();
});