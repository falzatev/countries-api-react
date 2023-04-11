import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import search from '../../assets/images/search.svg';

import '../../styles/Search.scss';

const initialRegions = [
  {value: 0, label: 'All'},
  {value: 1, label: 'Africa'},
  {value: 2, label: 'Americas'},
  {value: 3, label: 'Antarctic'},
  {value: 4, label: 'Asia'},
  {value: 5, label: 'Europe'},
  {value: 6, label: 'Oceania'},
];

function Search({ searchByRegion }: any) {
  
  const [regions, setRegions] = useState(initialRegions);
  const searchInput = useRef(null);

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

    const handleRegion = (e: any) => {
      const index = e.nativeEvent.target.selectedIndex;
      const text =e.nativeEvent.target[index].text;
      
      searchByRegion(text);
    }

    const handleSearch = (event: any) => {
      // let text: any = searchInput?.current?.value;
      searchByRegion(searchInput?.current?.value)
    }

  return (
    <div className='search'>
      <div className="search__input">
        <picture>
          <img src={search} ref={searchInput} alt="Search icon svg" width="25" onClick={handleSearch}/>
        </picture>
        <input type="text" ref={searchInput} placeholder='Search for a country' onChange={handleSearch}/>
      </div>
      <div className="search__select">
        <select name="region" id="region" onChange={(e) => handleRegion(e)}>
            {options()}
        </select>
      </div>
    </div>
  )
}

export default Search;
