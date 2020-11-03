import React, { useEffect } from 'react';
// Components
import Header from './Header';
import Banner from './Banner';
import Cases from './Cases';
import IntroOverlay from './IntroOverlay';
// Animations:

// Main:
const AwwwardsApp = () => {
  useEffect(() => {
    // :::::::::: Capture HEIGHT ::::::::::::
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // :::::::: Animations ::::::::
  }, []);
  return (
    <React.Fragment>
      <IntroOverlay></IntroOverlay>
      <Header></Header>
      <Banner></Banner>
      <Cases></Cases>
    </React.Fragment>
  );
};

export default AwwwardsApp;
