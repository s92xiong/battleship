import React from 'react';

const RenderModal = (props) => {
  if (!props.winner) return <div></div>;

  let theWinner = "";
  if (props.winner === "player") {
    theWinner = "Player";
  } else if (props.winner === "pc") {
    theWinner = "Computer"
  }

  return (
    <div className="bg-modal">
      <h1>{theWinner} has won the game!</h1>
      <button onClick={props.playAgainButton}>Play Again</button>
    </div>
  );
};

export default RenderModal;