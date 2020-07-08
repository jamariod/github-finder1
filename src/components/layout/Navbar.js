import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  //Default Props are used as a default value.
  //It will change when the prop property is passed.

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

//PropTypes are similar to Type annotation in Swift programming.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
