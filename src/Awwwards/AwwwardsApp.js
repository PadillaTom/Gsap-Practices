import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import gsap from 'gsap';
// Components:
import Header from './Header';
import Navigation from './Navigation';
//  Pages:
import HomePage from './Pages/HomePage';
import CaseStudiesPage from './Pages/CaseStudiesPage';
import ApproachPage from './Pages/ApproachPage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/about', name: 'About', Component: AboutPage },
  { path: '/approach', name: 'Approach', Component: ApproachPage },
  { path: '/services', name: 'Services', Component: ServicesPage },
  { path: '/casestudies', name: 'Case Studies', Component: CaseStudiesPage },
];

// Debounce Funtion:
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

// Main:
const AwwwardsApp = () => {
  // To prevent a "dimension" bug when changing window sizes:
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    // :::::::::: Capture HEIGHT ::::::::::::
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // :::::::: Prevent Animation Flash::::::::
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    // :::::::: Prevent Dimension BUG ::::::::
    // Debounces Handle Resize:
    const debouncedHR = debounce(function handleResize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }, 1000);
    window.addEventListener('resize', debouncedHR);
    return () => {
      window.removeEventListener('resize', debouncedHR);
    };
  }, []);
  return (
    <React.Fragment>
      <Router>
        <Header dimensions={dimensions}></Header>
        <div className='routes-container'>
          {routes.map(({ path, Component }) => {
            return (
              <Switch key={path}>
                <Route exact path={path}>
                  <Component></Component>
                </Route>
              </Switch>
            );
          })}
        </div>
        <Navigation></Navigation>
      </Router>
    </React.Fragment>
  );
};

export default AwwwardsApp;
