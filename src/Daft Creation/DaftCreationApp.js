import React, { useEffect } from 'react';
import gsap from 'gsap';

const DaftCreationApp = () => {
  useEffect(() => {
    // Prevent Default
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    // Main Animations:
  }, []);

  return (
    <React.Fragment>
      <section className='whole-app'>
        <h1>Hi</h1>
      </section>
    </React.Fragment>
  );
};

export default DaftCreationApp;
