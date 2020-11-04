import React, { useEffect } from 'react';
import { AiOutlineBars, AiOutlineShareAlt } from 'react-icons/ai';
import gsap, { TweenMax } from 'gsap';

const PhotographyApp = () => {
  let tl = gsap.timeline();

  useEffect(() => {
    // :::::::: Prevent Animation Flash::::::::
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    // :::::::: Animations ::::::::
    TweenMax.to('.left', 0.9, {
      delay: 0.8,
      width: '50%',
      ease: 'Expo.easeOut',
    });
    TweenMax.to('.right', 0.7, {
      delay: 0.6,
      width: '50%',
      ease: 'Power3.easeOut',
    });
    TweenMax.from('.navbar', 1.3, {
      delay: 0.8,
      opacity: 0,
      scale: 0,
      ease: 'Expo.easeInOut',
    });
    TweenMax.from('.text h1', 1, {
      delay: 0.6,
      x: 1000,
      ease: 'Circ.easeInOut',
    });
    TweenMax.from('.text p', 1, {
      delay: 0.8,
      x: 1000,
      ease: 'Circ.easeInOut',
    });
    TweenMax.to('.manuel-img', 1, {
      delay: 1.4,
      width: '50rem',
      ease: 'Power2.easeInOut',
    });
    TweenMax.staggerFrom(
      '.bottom-nav ul li',
      1.5,
      {
        delay: 1,
        x: 1000,
        ease: 'Circ.easeInOut',
      },
      0.2
    );
    TweenMax.from('.infos', 2, {
      delay: 1.5,
      y: 100,
      ease: 'Circ.easeInOut',
    });
    TweenMax.from('.name', 2, {
      delay: 1.5,
      x: -600,
      ease: 'Circ.easeInOut',
    });
  }, []);
  return (
    <React.Fragment>
      <div className='whole-app-container'>
        <div className='wrapper'>
          <div className='left'></div>
          <div className='right'></div>
        </div>

        <nav className='navbar'>
          <ul>
            <li className='logo'>Manuel</li>
            <li className='menu'>
              <AiOutlineBars></AiOutlineBars>
            </li>
            <li className='collection'>Collection</li>
            <li className='explore'>Explore</li>
            <li className='search'>Search</li>
            <li className='profile'>
              <div className='profile-img'></div>
            </li>
          </ul>
        </nav>

        <div className='content'>
          <div className='img-wrapper'>
            <div className='manuel-img'></div>
          </div>

          <div className='infos'>
            <ul>
              <li>manuel.com</li>
              <li>@manuel</li>
              <li>
                <AiOutlineShareAlt className='share-icon'></AiOutlineShareAlt>
              </li>
            </ul>
          </div>

          <div className='text'>
            <h1>Manuel</h1>
            <p>Art & Photography</p>
          </div>

          <div className='name'>Manuel</div>

          <div className='bottom-nav'>
            <ul>
              <li>Profile</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhotographyApp;
