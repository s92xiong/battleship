import React from 'react';
import "../styles/renderModal.css";

const RenderModal = (props) => {
  if (!props.winner) return <div></div>;

  let winningMessage = "";
  if (props.winner === "player") {
    winningMessage = "YOU WIN!";
  } else if (props.winner === "pc") {
    winningMessage = "COMPUTER WINS!"
  }

  return (
    <div className="modal-bg fade-in">
      <div className="modal">
        <h1 className="winning-message">{winningMessage}</h1>
        <button className="play-again-button" onClick={props.playAgainButton}>PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default RenderModal;