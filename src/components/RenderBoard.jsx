import React from 'react';
import '../styles/renderBoard.css';

const RenderBoard = ({ className, board, boardType, handleClick }) => {
  return (
    <div className={className} data-testid={(boardType === "player") ? "player-id" : "computer-id"}>
      {
        (board && board.length > 0) ?
        board.map((arr, y) => arr.map((box, x) => {
          // Determine square colour
          let targetClassName;
          let dataID;
          if (boardType === "pc") {
            if (box === "ship") {
              targetClassName = "grid-circle-ship-pc";
              dataID = "data-ship-pc";
            } else if (box === "hit") {
              targetClassName="grid-circle-hit";
              dataID=`data-hit-pc`;
            } else if (box === "miss") {
              targetClassName="grid-circle-miss";
              dataID=`data-miss-pc`;
            } else {
              dataID = "grid-box-id";
              targetClassName = "";
            }
          } else {
            if (box === "ship") {
              targetClassName = "grid-circle-ship-player";
              dataID = "data-ship-player";
            } else if (box === "hit") {
              targetClassName = "grid-circle-hit"; 
              dataID = "data-hit-player";
            } else if (box === "miss") {
              targetClassName="grid-circle-miss";
              dataID=`data-miss-player`;
            } else {
              dataID = "grid-box-id";
              targetClassName = "";
            }
          };
          
          return (
            <div key={`${y}${x}`} className="grid-box" name={`${y}${x}`} data-testid={dataID} onClick={handleClick}>
              <div name={`${y}${x}`} className={`grid-circle ${targetClassName}`}></div>
            </div>
          );
        })) :
        "Loading..."
      }
    </div>
  );
};

export default RenderBoard;