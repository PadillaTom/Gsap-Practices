import React, { useEffect } from 'react';
import gsap from 'gsap';

const FullpageAnimations = () => {
  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } });
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default FullpageAnimations;
