import React from 'react';
import { render } from '@testing-library/react';
import RenderGrid from '../RenderGrid';

test("Render the ships", () => {
  // Test for ship having ship placed on the board
  const board = Array(10).fill().map(array => Array(10).fill(null));
  board[0][0] = "ship";
  board[5][5] = "hit";

  const component = render(<RenderGrid board={board} />);
  
  const div = component.getByTestId('data-ship-player');
  expect(div).toHaveClass("grid-box-ship-player");

  const div2 = component.getByTestId('data-hit-player');
  expect(div2).toHaveClass("grid-box-hit-player");

  // component.debug();
});

test("Check if ships are defined", () => {
  const { getByTestId } = render(<RenderGrid boardType="player" />);
  const board = getByTestId("player-id");
  expect(board).toBeDefined();
});