import React from 'react';
import ICountryData from '../../types/country.type';

import { useTheme } from '../../contexts/ThemeProvider';

import '../../styles/card.scss';

const Card = ({name, flag, population, region, capital, onclick }: ICountryData) => {

  const { theme, setTheme } = useTheme();
  
  return (
    <div className={'card ' + (theme === 'dark' ? 'dark__border' : '')} onClick={onclick} >
      <picture>
        <img src={flag} alt="" className='card__img' loading="lazy" />
      </picture>
      <div className="card__description">
        <h2 className='description__name'>{name.common}</h2>
        <label className="desciption__label"><span>Population: </span>{population?.toString()}</label>
        <label className="desciption__label"><span>Region: </span>{region?.toString()}</label>
        <label className="desciption__label"><span>Capital: </span>{capital?.toString()}</label>
      </div>
    </div>
  )
}

export default Card
