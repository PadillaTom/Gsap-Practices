import React from 'react';
import { ReactComponent as RightArrow } from './Assets/arrowRight.svg';

const Banner = () => {
  return (
    <React.Fragment>
      <section className='section banner-sect'>
        <div className='banner-container'>
          <div className='text--container'>
            <div className='banner-line'>
              <h2>
                <span>Creating unique brand is</span>
              </h2>
            </div>
            <div className='banner-line'>
              <h2>
                <span>what we do.</span>
              </h2>
            </div>
          </div>
          <div className='banner-cta'>
            <h5>
              More about us <RightArrow></RightArrow>
            </h5>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
