import React from 'react';
import { render } from '@testing-library/react';
import RenderGrid from '../RenderGrid';
import { renderHook } from '@testing-library/react-hooks';
import PlayerBoardState from '../playerBoardState';
import { act } from 'react-dom/test-utils';


test("Ship placement is valid", () => {
  // Test for ship having ship placed on the board
  const board = Array(10).fill().map(array => Array(10).fill(undefined));
  board[0][0] = "ship";
  board[5][5] = "hit";

  const component = render(<RenderGrid board={board} />);
  
  const div = component.getByTestId('data-ship');
  expect(div).toHaveClass("grid-box-ship");

  const div2 = component.getByTestId('data-hit');
  expect(div2).toHaveClass("grid-box-hit");

  // component.debug();
});