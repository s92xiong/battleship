import play from '../images/play.png';
import shuffle from '../images/shuffle.png';
import trash from '../images/trash.png';

const RenderButtons = () => (
  <div className="button-list">
    <div className="play-icon icon">
      <img src={play} alt=""/>
    </div>
    <div className="shuffle-icon icon">
      <img src={shuffle} alt=""/>
    </div>
    <div className="trash-icon icon">
      <img src={trash} alt=""/>
    </div>
  </div>
);

export default RenderButtons;