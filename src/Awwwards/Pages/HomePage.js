import React from 'react';
import Banner from '../Banner';
import Cases from '../Cases';
import IntroOverlay from '../IntroOverlay';

const HomePage = () => {
  return (
    <React.Fragment>
      <IntroOverlay></IntroOverlay>
      <Banner></Banner>
      <Cases></Cases>
    </React.Fragment>
  );
};

export default HomePage;
