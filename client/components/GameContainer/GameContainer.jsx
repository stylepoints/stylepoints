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
            No
          </div>
          <div className={style.yesButton}>
            Yes
          </div>
        </div>
      </div>
    );
  }
}

export default GameContainer;
