import React from 'react';
import '../styles/renderBoard.css';
import changeTargetColour from './changeTargetColour';

const RenderBoard = ({ className, board, boardType, handleClick }) => {
  return (
    <div className={className} data-testid={(boardType === "player") ? "player-id" : "computer-id"}>
      {
        (board && board.length > 0) ?
        board.map((arr, y) => arr.map((box, x) => {
          const obj = changeTargetColour(boardType, box);
          return (
            <div 
              key={`${y}${x}`} 
              className="grid-box empty" 
              name={`${y}${x}`}
              onClick={handleClick}
            >
              <div 
                name={`${y}${x}`} 
                className={`grid-circle ${obj.targetClassName}`} 
                data-testid={obj.dataID} 
              >
              </div>
            </div>
          );
        })) :
        "Loading..."
      }
    </div>
  );
};

export default RenderBoard;