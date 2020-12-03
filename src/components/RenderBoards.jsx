import React from 'react';

const RenderGrid = ({className, board, boardType}) => {
  return (
    <div className={className} data-testid={(boardType === "player") ? "player-id" : "computer-id"}>
      {
        (board && board.length > 0) ?
        board.map((arr, y) => arr.map((box, x) => {
          if (boardType === "pc") {
            if (box === "ship") return <div key={x} className="grid-box-ship grid-box-ship-pc" data-testid={`data-ship-pc`}></div>;
            else if (box === "hit") return <div key={x} className="grid-box-hit grid-box-hit-pc" data-testid={`data-hit-pc`}></div>
            return <div key={x} className="grid-box" data-testid="grid-box-id"></div>;
          } else {
            if (box === "ship") return <div key={x} className="grid-box-ship grid-box-ship-player" data-testid={`data-ship-player`}></div>;
            else if (box === "hit") return <div key={x} className="grid-box-hit grid-box-hit-player" data-testid={`data-hit-player`}></div>
            return <div key={x} className="grid-box" data-testid="grid-box-id"></div>;
          }
        })) :
        "Loading..."
      }
    </div>
  );
};

export default RenderGrid;