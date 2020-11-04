import React, { useEffect } from 'react';
import gsap from 'gsap';
// Icons:
import { HiMenuAlt2 } from 'react-icons/hi';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';

const MinimalNavigationApp = () => {
  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } });
  }, []);
  return (
    <React.Fragment>
      <div className='wrapper background-app'>
        <div className='outer-content'>
          <h1 className='title'>Minimal Navigation</h1>
        </div>

        <div className='menu-toggle'>
          <div className='toggle-btn'>
            <HiMenuAlt2 className='menu-bars'></HiMenuAlt2>
          </div>
        </div>

        <div className='menu'>
          <div className='nav-images'>
            <span className='bg bg1 hide'></span>
            <span className='bg bg2 hide'></span>
            <span className='bg bg3 hide'></span>
            <span className='bg bg4 hide'></span>
          </div>
          <div className='nav'>
            <div className='menu'>
              <ul>
                <li>
                  <span id='order'>01.</span>
                  <span id='menu'> Home /</span>
                  <span id='tag'>Intro</span>
                </li>
                <li>
                  <span id='order'>02.</span>
                  <span id='menu'> Our Story /</span>
                  <span id='tag'>Since 1800</span>
                </li>
                <li>
                  <span id='order'>03.</span>
                  <span id='menu'> Portfolio /</span>
                  <span id='tag'>Latest Works</span>
                </li>
                <li>
                  <span id='order'>04.</span>
                  <span id='menu'> Contact /</span>
                  <span id='tag'>Get in Touch</span>
                </li>
              </ul>
            </div>

            <div className='media'>
              <ul>
                <li className='single-icon'>
                  <AiFillFacebook></AiFillFacebook>
                </li>
                <li className='single-icon'>
                  <AiFillInstagram></AiFillInstagram>
                </li>
                <li className='single-icon'>
                  <AiFillLinkedin></AiFillLinkedin>
                </li>
                <li className='single-icon'>
                  <AiFillTwitterSquare></AiFillTwitterSquare>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MinimalNavigationApp;
