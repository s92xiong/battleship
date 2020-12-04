import React from 'react';

const RenderGrid = ({ className, board, boardType, handleClick }) => {
  return (
    <div className={className} data-testid={(boardType === "player") ? "player-id" : "computer-id"}>
      {
        (board && board.length > 0) ?
        board.map((arr, y) => arr.map((box, x) => {
          if (boardType === "pc") {
            if (box === "ship") { 
              return (
                <div 
                  key={`${y}${x}`}
                  name={`${y}${x}`}
                  className="grid-box-ship grid-box-ship-pc" 
                  data-testid={`data-ship-pc`} 
                  onClick={handleClick}
                >
                </div>);
            }
            else if (box === "hit") {
              return (
                <div 
                  key={`${y}${x}`} 
                  name={`${y}${x}`}
                  className="grid-box-hit grid-box-hit-pc" 
                  data-testid={`data-hit-pc`} 
                  onClick={handleClick}
                >
                </div>
              );
            } else if (box === "miss") {
              return (
                <div 
                  key={`${y}${x}`} 
                  name={`${y}${x}`}
                  className="grid-box-miss grid-box-miss-pc" 
                  data-testid={`data-miss-pc`} 
                  onClick={handleClick}
                >
                </div>
              );
            }
            return (
              <div 
                key={`${y}${x}`} 
                name={`${y}${x}`}
                className="grid-box" 
                data-testid="grid-box-id" 
                onClick={handleClick}
              >
              </div>
            );
          } else {
            if (box === "ship") {
              return (
                <div 
                  key={`${y}${x}`}
                  name={`${y}${x}`}
                  className="grid-box-ship grid-box-ship-player" 
                  data-testid={`data-ship-player`}
                >
                </div>
              );
            }
            else if (box === "hit") {
              return (
                <div 
                  key={`${y}${x}`} 
                  name={`${y}${x}`}
                  className="grid-box-hit grid-box-hit-player" 
                  data-testid={`data-hit-player`}
                >
                </div>
              );
            } else if (box === "miss") {
              return (
                <div 
                  key={`${y}${x}`} 
                  name={`${y}${x}`}
                  className="grid-box-miss grid-box-miss-player" 
                  data-testid={`data-miss-player`} 
                  onClick={handleClick}
                >
                </div>
              );
            }
            return <div key={`${y}${x}`} name={`${y}${x}`} className="grid-box" data-testid="grid-box-id"></div>;
          }
        })) :
        "Loading..."
      }
    </div>
  );
};

export default RenderGrid;
