import React from 'react';

const IntroOverlay = () => {
  return (
    <React.Fragment>
      <div className='intro-overlay'>
        <div className='top'>
          <div className='overlay-top'></div>
          <div className='overlay-top'></div>
          <div className='overlay-top'></div>
        </div>
        <div className='bottom'>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IntroOverlay;
