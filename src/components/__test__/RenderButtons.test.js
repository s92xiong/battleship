import React from 'react';
import { fireEvent, getAllByTestId, getByTestId, render } from '@testing-library/react';
import RenderButtons from "../RenderButtons";
import App from '../../App';

test("Check if ships are defined", () => {
  const { getByTestId } = render(<RenderButtons />);
  const button = getByTestId("play-button-id");
  expect(button).toBeDefined();
});

test("Shuffle ships", () => {
  // render App into an object called "component"
  const component = render(<App />);
  
  // Get access to the shuffle button & check if it exists
  const shuffleButton = getByTestId(component.container, "shuffle-button-id");
  expect(shuffleButton).toHaveClass("shuffle-icon");
  
  // When shuffle button clicked, RenderGrid renders 17 divs with a data-test-id value of "data-ship"
  fireEvent.click(shuffleButton);
  const array = getAllByTestId(component.container, 'data-ship-player');
  expect(array.length).toBe(17);
});

test("Delete ships", () => {
  const component = render(<App />);
  
  // Add ships to the board
  const shuffleButton = getByTestId(component.container, "shuffle-button-id");
  expect(shuffleButton).toHaveClass("shuffle-icon");
  
  const deleteButton = getByTestId(component.container, "delete-button-id");
  expect(deleteButton).toHaveClass("trash-icon");
  
  fireEvent.click(shuffleButton);
  const array = getAllByTestId(component.container, 'data-ship-player');
  expect(array.length).toBe(17);

  // When delete button clicked, remove ships from the grid
  // Each grid has 100 squares, thus we expect the result to return an array of length = 200
  fireEvent.click(deleteButton);
  const array2 = getAllByTestId(component.container, "grid-box-id");
  expect(array2.length).toBe(200);
});