import '../styles/buttons.css';
import play from '../images/play.png';
import shuffle from '../images/shuffle.png';
import trash from '../images/trash.png';

const RenderButtons = ({ playButton, shuffleButton, deleteButton, playerRef, gameValid }) => (
  <div className="button-list">
    <div onClick={playButton} className={(gameValid) ? "play-icon icon" : "play-icon-invalid icon"} data-testid="play-button-id" ref={playerRef}>
      <img src={play} alt=""/>
    </div>
    <div onClick={shuffleButton} className="shuffle-icon icon" data-testid="shuffle-button-id">
      <img src={shuffle} alt=""/>
    </div>
    <div onClick={deleteButton} className="trash-icon icon" data-testid="delete-button-id">
      <img src={trash} alt=""/>
    </div>
  </div>
);

export default RenderButtons;