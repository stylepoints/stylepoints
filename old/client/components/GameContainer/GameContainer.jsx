import React, { Component } from 'react';
import { Link } from 'react-router';
import GameTracker from '../GameTracker';
import GameImage from '../GameImage';
import style from './GameContainer.css';


const image1 = '../../assets/images/1.jpg';
const image2 = '../../assets/images/2.jpg';
const image3 = '../../assets/images/3.jpg';
const image4 = '../../assets/images/4.jpg';
const image5 = '../../assets/images/5.jpg';
const image6 = '../../assets/images/6.jpg';
const image7 = '../../assets/images/7.jpg';
const image8 = '../../assets/images/8.jpg';
const image9 = '../../assets/images/9.jpg';

class GameContainer extends Component {



  render() {
    return (
      <div className={style.gameContainer}>
        <GameTracker currentIndex={1} totalImage={10}/>
        <div className={style.gameImage}>
          <GameImage imagePath={image1} />
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
