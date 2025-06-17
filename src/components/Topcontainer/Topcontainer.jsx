import React from 'react';

import { Element } from 'react-scroll';
import './Topcontainer.css';
import Topcontent from '../Topcontent/Topcontent';

const Topcontainer = () => {
  return (
    <Element name= 'About' className='topcontainer'>
        <Topcontent />
    </Element>
  );
}

export default Topcontainer;
