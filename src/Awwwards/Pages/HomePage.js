import React, { useEffect } from 'react';
// Components:
import Banner from '../Banner';
import Cases from '../Cases';
import IntroOverlay from '../IntroOverlay';
// Animations:
import gsap from 'gsap';
const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from('.banner-line span', 1, {
    y: 100,
    ease: 'Power4.Out',
    delay: 0.5,
    skewY: 7,
    stagger: {
      amount: 0.5,
      skewY: 10,
    },
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.5,
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to('.intro-overlay', 0, { css: { display: 'none' } })
    .from('.case-img img', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const HomePage = () => {
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  useEffect(() => {
    // :::::::: Animations ::::::::
    homeAnimation(completeAnimation);
  }, []);
  return (
    <React.Fragment>
      {!animationComplete && <IntroOverlay></IntroOverlay>}
      <Banner></Banner>
      <Cases></Cases>
    </React.Fragment>
  );
};

export default HomePage;
