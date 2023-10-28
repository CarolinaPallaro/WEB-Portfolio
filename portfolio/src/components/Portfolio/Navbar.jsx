
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import NabCss from './Styles/Navbar.module.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`NavCss.navbar ${scrolling ? NabCss.scrollNavbar : ''}`}>
      <ul className={NabCss.ul}>
        <li className={NabCss.li}>
          <Link to="AboutMe" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li className={NabCss.li}>
          <Link to="Projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className={NabCss.li}>
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className={NabCss.li}>
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
