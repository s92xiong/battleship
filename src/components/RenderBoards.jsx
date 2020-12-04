import React from 'react';

const RenderGrid = ({ className, board, boardType, handleClick }) => {
  return (
    <div className={className} data-testid={(boardType === "player") ? "player-id" : "computer-id"}>
      {
        (board && board.length > 0) ?
        board.map((arr, y) => arr.map((box, x) => {
          // Determine square colour
          let nameOfClass;
          let dataID;
          if (boardType === "pc") {
            if (box === "ship") {
              nameOfClass = "grid-box-ship grid-box-ship-pc";
              dataID = "data-ship-pc";
            } else if (box === "hit") {
              nameOfClass="grid-box-hit grid-box-hit-pc";
              dataID=`data-hit-pc`;
            } else if (box === "miss") {
              nameOfClass="grid-box-miss grid-box-miss-pc";
              dataID=`data-miss-pc`;
            } else {
              nameOfClass = "grid-box"; 
              dataID = "grid-box-id";
            }
          } else {
            if (box === "ship") {
              nameOfClass = "grid-box-ship grid-box-ship-player";
              dataID = "data-ship-player";
            } else if (box === "hit") {
              className = "grid-box-hit grid-box-hit-player"; 
              dataID = "data-hit-player";
            } else if (box === "miss") {
              nameOfClass="grid-box-miss grid-box-miss-player";
              dataID=`data-miss-player`;
            } else {
              nameOfClass = "grid-box"; 
              dataID = "grid-box-id";
            }
          };
          return <div key={`${y}${x}`} name={`${y}${x}`} className={nameOfClass} data-testid={dataID} onClick={handleClick}></div>;
        })) :
        "Loading..."
      }
    </div>
  );
};

export default RenderGrid;

          // if (boardType === "pc") {
          //   if (box === "ship") return <div key={x} className="grid-box-ship grid-box-ship-pc" data-testid={`data-ship-pc`}></div>;
          //   else if (box === "hit") return <div key={x} className="grid-box-hit grid-box-hit-pc" data-testid={`data-hit-pc`}></div>
          //   return <div key={x} className="grid-box" data-testid="grid-box-id"></div>;
          // } else {
          //   if (box === "ship") return <div key={x} className="grid-box-ship grid-box-ship-player" data-testid={`data-ship-player`}></div>;
          //   else if (box === "hit") return <div key={x} className="grid-box-hit grid-box-hit-player" data-testid={`data-hit-player`}></div>
          //   return <div key={x} className="grid-box" data-testid="grid-box-id"></div>;
          // }