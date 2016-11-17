import React from 'react';
import { Link } from 'react-router';

import style from './NavigationBar.css';

import menuButton from './menuButton.svg';
import logo from './logo.svg';
import profilePicture from './profilePicture.png';

const NavigationBar = () => (
  <div className={style.navigationBar}>
    <img className={style.menuButton} src={menuButton} />
    <img className={style.logo} src={logo} />
    <span className={style.navigationBarText}>Create Your Style</span>
    <img className={style.profilePicture} src={profilePicture}/>
  </div>
);

export default NavigationBar;
