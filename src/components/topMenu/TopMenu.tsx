import React from 'react';
import sun from '../../assets/images/sun.svg';
import moon from '../../assets/images/moon.svg';
import '../../styles/TopMenu.scss';

type Props = {}

const TopMenu = (props: Props) => {
  return (
    <header className='topHeader'>
        <div className="header">
          <div>
            <label>Where in the world?</label>
          </div>
          <div className="mode">
              <img className='mode__dark' src={moon} alt="Moon svg" />
              <p className='mode__dark'>Dark Mode</p>
              {/* <img className='mode__light' src={sun} alt="Sun svg" />
              <p className='mode__light'>Light Mode</p> */}
          </div>
        </div>
    </header>
  )
}

export default TopMenu;