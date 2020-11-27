import Ship from '../Ship';

test('Ship returns an object', () => expect(typeof Ship()).toBe("object"));

test("Ship length", () => {
  const shipObj = Ship(2);
  expect(shipObj.array.length).toBe(2);
});

test("Ship has been hit", () => {
  const shipObj = Ship(4);
  shipObj.hit(shipObj.array);
  expect(shipObj.array).toEqual([false, false, false]);
});

test("Ship is sunk", () => {
  const shipObj = Ship(1);
  shipObj.array.splice(0, 1);
  expect(shipObj.shipIsSunk(shipObj.array)).toBe(true);
});