import React, { Component } from 'react';
import { Link } from 'react-router';

import style from './GameContainer.css';

class GameContainer extends Component {



  render() {
    return (
      <div className={style.gameContainer}>
        <div className={style.gameTracker}>
          Game Tracker
        </div>
        <div className={style.gameImage}>
          Game Image
        </div>
        <div className={style.buttonContainer}>
          <div className={style.noButton}>
            <span className={style.no} />
          </div>
          <div className={style.yesButton}>
            <span className={style.yes} />
          </div>
        </div>
      </div>
    );
  }
}

export default GameContainer;
