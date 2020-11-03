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
                <span>Aguante el Paco</span>
              </div>
              <div className='banner-line'>
                <span>Es vida.</span>
              </div>
            </h2>
            <div className='banner-cta'>
              More about : Paco <RightArrow></RightArrow>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
