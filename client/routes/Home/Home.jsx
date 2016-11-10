import Helmet from 'react-helmet';
import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import GameContainer from '../../components/GameContainer';
const Home = () => (
  <div>
    <Helmet title='Stylepoints' />
    <NavigationBar />
    <GameContainer />
  </div>
);

export default Home;
