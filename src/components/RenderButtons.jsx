import '../styles/buttons.css';
import play from '../images/play.png';
import shuffle from '../images/shuffle.png';
import trash from '../images/trash.png';

const RenderButtons = ({ playButton, shuffleButton, deleteButton, gameValid, gameStart }) => (
  // If the game has started, then remove the button list from being rendered
  <div className={(!gameStart) ? "button-list" : "button-list-none"}>
    {/* If the game is valid to play, highlight the button as normal */}
    <div onClick={playButton} className={(gameValid) ? "play-icon icon" : "play-icon-invalid icon"} data-testid="play-button-id">
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