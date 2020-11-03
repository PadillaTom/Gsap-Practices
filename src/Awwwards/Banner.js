import React from 'react';
import { ReactComponent as RightArrow } from './Assets/arrowRight.svg';

const Banner = () => {
  return (
    <React.Fragment>
      <section className='section banner-sect'>
        <div className='banner-container'>
          <div className='text-container'>
            <h2>
              <div className='banner-line'>
                <span>Creating unique brands is</span>
              </div>
              <div className='banner-line'>
                <span>what we do.</span>
              </div>
            </h2>
            <div className='banner-cta'>
              More about us <RightArrow></RightArrow>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
