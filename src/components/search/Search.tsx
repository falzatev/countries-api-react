import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import search from '../../assets/images/search.svg';

import '../../styles/Search.scss';

function Search() {

    const regions = [
        {value: 1, label: 'Africa'},
        {value: 2, label: 'America'},
        {value: 3, label: 'Asia'},
        {value: 4, label: 'Europe'},
        {value: 5, label: 'Oceania'},
    ]

    const options = () => {
        return (
            regions.map(region => {
                return (
                    <option key={region.value} value={region.value}>
                        {region.label}
                    </option>
                )
            })
        );
    }

  return (
    <div className='search'>
      <div className="search__input">
        <img src={search} alt="Search icon svg" width="25"/>
        <input type="text" placeholder='Search for a country'/>
      </div>
      <div className="search__select">
        <select name="" id="">
            {options()}
        </select>
      </div>
    </div>
  )
}

export default Search;
