import React from 'react';

const RenderGrid = ({className, board}) => {
  return (
    <div className={className}>
      {
        (board && board.length > 0) ?
        board.map(col => col.map((box, i) => {
          if (box === "ship") return <div key={i} className="grid-box-ship"></div>;
          else if (box === "hit") return <div key={i} className="grid-box-hit"></div>
          return <div key={i} className="grid-box"></div>;
        })) :
        "Loading..."
      }
    </div>
  );
};

export default RenderGrid;