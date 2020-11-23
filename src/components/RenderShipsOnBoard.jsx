import React from 'react';
import imageArray from './LoadShipImages';

const RenderShipsOnBoard = () => {
  return (
    <div className="place-ships">
      <div className="ship-preparation">
        <div className="ship-display"></div>
        <div className="button-control"></div>
      </div>
      <div className="sidebar-scroll">
        {
          imageArray.map((image, i) => (
            <div key={image} className="image-ship-div">
              <img className="boat-png" src={imageArray[i]} alt=""/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default RenderShipsOnBoard;