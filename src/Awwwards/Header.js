import React, { useState, useEffect } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { ReactComponent as ArrowUp } from './Assets/arrowUp.svg';
import gsap from 'gsap';
let tl = gsap.timeline();

const Header = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  let history = useHistory();
  useEffect(() => {
    // ::::::::::::: Router ::::::::::::

    history.listen(() => {
      setMenuState({ menuOpened: false });
    });

    //::::::::  Check if menu is Opened ::::::::::::
    if (menuState.menuOpened === true) {
      // Run Open Animation:
      gsap.to('nav', { css: { display: 'block' } });
      gsap.to('body', { css: { overflow: 'hidden' } });

      tl.to('.routes-container', 1, {
        y: dimensions.height / 2,
        ease: 'expo.inOut',
      })
        .to('.hamburger-menu span', 0.6, {
          delay: -1,
          scaleX: 0,
          transformOrigin: '50% 0',
          ease: 'expo.inOut',
        })
        .to('#Path_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('#Path_2', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to('#Line_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 10,
          },
        })
        .to('#circle', 0.4, {
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to('.hamburger-menu-close', 1.5, {
          delay: -0.4,
          css: {
            display: 'block',
          },
        });
    } else {
      //  Run Close Animation
      tl.to('.routes-container', 1, {
        y: 0,
        ease: 'expo.inOut',
      })
        .to('#circle', 1, {
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to('#Path_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Path_2', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Line_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to('.hamburger-menu span', 0.6, {
          delay: -0.6,
          scaleX: 1,
          transformOrigin: '50% 0',
          ease: 'expo.inOut',
        })
        .to('.hamburger-menu-close', 0, {
          css: {
            display: 'none',
          },
        })
        .to('body', {
          overflow: 'auto',
        })
        .to('nav', {
          css: {
            display: 'none',
          },
        });
    }
  }, [menuState.menuOpened]);

  return (
    <React.Fragment>
      <header className='header'>
        <div className='header-container'>
          <div className='header-row'>
            <div className='logo'>
              <Link to='/'>
                <h1>Paco</h1>
              </Link>
            </div>
            <div className='nav-toggle'>
              <div
                className='hamburger-menu'
                onClick={() => setMenuState({ menuOpened: true })}
              >
                <span></span>
                <span></span>
              </div>
              <div
                className='hamburger-menu-close'
                onClick={() => setMenuState({ menuOpened: false })}
              >
                <ArrowUp></ArrowUp>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default withRouter(Header);
