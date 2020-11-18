import Ship from '../Ship';

test('Ship function exists', () => expect(Ship).toBeDefined());
test('Ship returns an object', () => expect(typeof Ship()).toBe("object"));

test("Ship length", () => {
  const shipObj = Ship(2);
  expect(shipObj.array.length).toBe(2);
});

test("Ship has been hit", () => {
  const shipObj = Ship(4);
  shipObj.hit(shipObj.array, 2);
  expect(shipObj.array).toEqual([false, false, true, false]);
});

test("Ship is sunk", () => {
  const shipObj = Ship(4);
  shipObj.array.fill(true);
  expect(shipObj.isSunk(shipObj.array)).toBeTruthy();
});