import Helmet from 'react-helmet';
import React from 'react';

import NavigationBar from '../../components/NavigationBar';

const Home = () => (
  <div>
    <Helmet title='Home' />
    <NavigationBar />
  </div>
);

export default Home;
