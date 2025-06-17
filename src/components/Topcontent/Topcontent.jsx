import React from 'react';
import{Link} from 'react-scroll';
import './Topcontent.css';

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>

            <h1 id='name' className='topcontent__container_name'>Mr.ROHITH KUMAR S </h1>
            <p> Artificial Intelligence and Machine Learning Developer</p>
            <a>
                <button className='topcontent__container__button'> Download CV </button>
            </a>
            <Link to="Projects" smooth={true} duration={500} className='topcontent__container__mywork'>
                <button id='mywork' className='topcontent__container__work'>My Work</button>
            </Link>

        </div>
      
    </div>
  );
}

export default Topcontent;