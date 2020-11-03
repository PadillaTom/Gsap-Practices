import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <Link to='/about' exact>
                  About
                </Link>
              </li>
              <li>
                <Link to='/approach' exact>
                  Approach
                </Link>
              </li>
              <li>
                <Link to='/services' exact>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/casestudies' exact>
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <Link to='/contact' exact>
                    Get in touch with us
                  </Link>
                </li>
                <li>
                  <Link to='/audit' exact>
                    Get free audit
                  </Link>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Headquarters</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+00 00 000 00 00</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
