import React from 'react';
import sun from '../../assets/images/sun.svg';
import moon from '../../assets/images/moon.svg';
import '../../styles/TopMenu.scss';

type Props = {}

const TopMenu = (props: any) => {
  return (
    <header className={'topHeader ' + (props.theme === 'dark' ? 'dark__mode' : '')} >
        <div className="header">
          <div>
            <label>Where in the world?</label>
          </div>
          <div className="mode">
            {props.theme === "light" 
              ? (
                <div onClick={props.handleToggleTheme}>
                  <img className='mode__dark' src={moon} alt="Moon svg" />
                  <p className='mode__dark'>Dark Mode</p>
                </div>
              ) 
              : (
                <div onClick={props.handleToggleTheme}>
                  <img className='mode__light' src={sun} alt="Sun svg" />
                  <p className='mode__light'>Light Mode</p>
                </div>
              )
            
            }
              
          </div>
        </div>
    </header>
  )
}

export default TopMenu;