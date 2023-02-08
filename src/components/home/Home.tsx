import React, {useState} from 'react';
import ICountryData from '../../types/country.type';
import Card from '../card/Card';

import '../../styles/home.scss';

const Home = (props: any) => {
    
    const [error, setError] = useState('');

  return (
    <section className='content'>
        {props.countries.map((country: ICountryData, index: number) => {
            return (
                <Card name={country.name} flag={country.flags['svg']} population={country.population} region={country.region} 
                capital={country.capital} key={index}/>
            )
        })}
    </section>
  )
}

export default Home