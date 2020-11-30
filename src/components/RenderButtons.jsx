import '../styles/buttons.css';
import play from '../images/play.png';
import shuffle from '../images/shuffle.png';
import trash from '../images/trash.png';

const RenderButtons = ({ handleClick }) => (
  <div className="button-list">
    <div className="play-icon icon">
      <img src={play} alt=""/>
    </div>
    <div onClick={handleClick} className="shuffle-icon icon">
      <img src={shuffle} alt=""/>
    </div>
    <div className="trash-icon icon">
      <img src={trash} alt=""/>
    </div>
  </div>
);

export default RenderButtons;