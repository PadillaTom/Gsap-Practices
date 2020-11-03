import React, { useEffect } from 'react';
// Components:
import Header from './Header';
//  Pages:
import HomePage from './Pages/HomePage';
// Animations:
import gsap from 'gsap';

// Main:
const AwwwardsApp = () => {
  useEffect(() => {
    // :::::::::: Capture HEIGHT ::::::::::::
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // :::::::: Prevent Animation Flash::::::::
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    // :::::::: Animations ::::::::
    const tl = gsap.timeline();

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
      });
  }, []);
  return (
    <React.Fragment>
      <Header></Header>
      <HomePage></HomePage>
    </React.Fragment>
  );
};

export default AwwwardsApp;
