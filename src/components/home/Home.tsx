import React, {useState} from 'react';
import ICountryData from '../../types/country.type';
import Card from '../card/Card';

import '../../styles/home.scss';
import { useCountry } from '../../contexts/Providers';

const Home = (props: any) => {
    
    const [error, setError] = useState('');
    const { country, setCountry } = useCountry();

    const handelModal = (country: ICountryData) => {
        setCountry(country);
        props.handleModalOpen();        
    }

  return (
    <section className='content'>
        {props.countries.length ? (props.countries.map((country: ICountryData, index: number) => 
            (
                <div style={{margin: '0 auto'}} key={Number(country.ccn3)}>
                    <Card name={country.name} flag={country.flags['svg']} population={country.population} region={country.region} 
                    capital={country.capital}  onclick={() => handelModal(country)} />
                </div>
            )
        ))
        : (
           <div style={{fontFamily: 'sans-serif', fontSize: '30px', fontWeight: 'bold', margin: '0 auto'}}>
               <p>Not countries found</p>
           </div> 
        )}
    </section>
  )
}

export default Home