import React from 'react';
import{Link} from 'react-scroll';
import './Header.css';


const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <h1> 
            ROHITH <span>RK</span>
        </h1>

      </div>
      <div className='header__right'>

        <Link to="About" smooth={true} duration={500} className='header__right__About'>
        <h4>
            About
        </h4>
        </Link>

        <Link to="Skills" smooth={true} duration={500} className='header__right__Skills'>
        <h4>
            Skills
        </h4>
        </Link>

        <Link to="Projects" smooth={true} duration={500} className='header__right__Projects'>
        <h4>
            Projects
        </h4>
        </Link>

        <Link to="Experience" smooth={true} duration={500} className='header__right__Experience'>
        <h4>
            Experience
        </h4>
        </Link>

        <Link to="Contact" smooth={true} duration={500} className='header__right__Contact'>
        <h4>
            Contact
        </h4>
        </Link>

        <h4 className='header__right__button'>
            Join Me
        </h4>


      </div>
    </div>
  );
}

export default Header;
