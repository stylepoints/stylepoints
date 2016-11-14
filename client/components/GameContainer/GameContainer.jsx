import React, { Component } from 'react';
import { Link } from 'react-router';
import GameTracker from '../GameTracker';
import style from './GameContainer.css';

class GameContainer extends Component {



  render() {
    return (
      <div className={style.gameContainer}>
        <GameTracker currentIndex={1} totalImages={10}/>
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
