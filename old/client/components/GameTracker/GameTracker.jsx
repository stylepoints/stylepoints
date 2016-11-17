import React, { PropTypes } from 'react';
import style from './GameTracker.css';


const GameTracker = ({ currentIndex, totalImages }) => (
  <div className={style.gameTracker}>
    <div className={style.gameTrackerBack}>
      <button className={style.gameTrackerBackButton}></button>
    </div>
    <div className={style.gameTrackerIndex}>{currentIndex} / {totalImages}</div>
    <div className={style.gameTrackerClose}>
      <button className={style.gameTrackerCloseButton}></button>
    </div>
    <progress max="100" value="10" className={style.gameTrackerProgress} />

  </div>
);

GameTracker.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired
};

export default GameTracker;
