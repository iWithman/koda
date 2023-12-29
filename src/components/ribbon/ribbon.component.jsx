import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ribbon.scss';



const Ribbon = () => {
  return ( 
    <>
      <div className="ribbon">
        <div className='empty-space'></div>
        <div className='content'>
          Welcome to <strong>Koda's page</strong> - <i>located in South Florida</i>
        </div>
        <div className='social-media'>
          <b>
            Follow us on
          </b>
          <div>
            <FontAwesomeIcon icon={['fab', 'apple']} />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
   );
}
 
export default Ribbon;