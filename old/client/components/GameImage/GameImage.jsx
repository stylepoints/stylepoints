import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './GameImage.css';

class GameImage extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.imagePath);
  }

  render() {
    return (
      <div>Game Image</div>
    );
  }

}

export default GameImage;
