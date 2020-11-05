import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// images:
import rolex1 from './Assets/rolexpng1.png';

const FullpageAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    //   Prevent Default
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    //      Scroll Trigger for Titles
    gsap.from('.s1 h1', 2, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.s1 h1',
        toggleActions: 'restart none restart none',
      },
    });
    gsap.from('.s2 h1', 2, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.s2 h1',
        start: 'top bottom-=100',
        end: 'bottom top',
        toggleActions: 'restart none restart none',
      },
    });
    gsap.from('.watch-png', 0.7, {
      opacity: 0,
      x: '200%',
      scrollTrigger: {
        trigger: '.watch-png',
        start: 'top bottom-=100',
        end: 'bottom top',
        toggleActions: 'restart none restart none',
      },
    });
    gsap.from('.s3 h1', 2, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.s3 h1',
        toggleActions: 'restart none restart none',
      },
    });
  }, []);
  return (
    <React.Fragment>
      <div className='fullpage'>
        <section className='section s1'>
          <h1>Maison Rolex</h1>
        </section>
        <section className='section s2'>
          <h1>Class & Style</h1>
          <div className='description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur voluptatum quasi eum labore ducimus deleniti rem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              iure voluptatem impedit aperiam laudantium commodi nam libero non
              nostrum sint? Ipsa ex ab dolore veniam accusantium cum tenetur
              asperiores exercitationem.
            </p>
          </div>
          <img src={rolex1} alt='watch1' className='watch-png' />
        </section>
        <section className='section s3'>
          <h1>Section 3</h1>
        </section>
      </div>
    </React.Fragment>
  );
};

export default FullpageAnimations;
