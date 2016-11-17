import React, { PropTypes } from 'react';
import style from './PageHeading.css';
const PageHeading = ({ text }) => (
  <h1 className={style.tiny}>{text}</h1>
);

PageHeading.propTypes = {
  text: PropTypes.string.isRequired
};

export default PageHeading;
