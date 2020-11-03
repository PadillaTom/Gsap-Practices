import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <div className='header-container'>
          <div className='header-row'>
            <div className='logo'>
              <h1>Paco</h1>
            </div>
            <nav className='navbar'>
              <span></span>
              <span></span>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
