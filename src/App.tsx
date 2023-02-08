import { useState, useEffect } from 'react'
import './styles/App.scss';
import TopMenu from './components/topMenu/TopMenu';
import Search from './components/search/Search';
import Home from './components/home/Home';

import api from './http-common/http-common';
import ICountryData from './types/country.type';


function App() {
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState<ICountryData[]>([]);
  const [countriesFilter, setCountriesFilter] = useState<ICountryData[]>([]);

  const [showModal, setShowModal] = useState(false);
  
  let countryList: ICountryData[] = [];

  useEffect(() => {
    try {
        api.get('all')
        .then( response =>{ 
          setCountries(response.data.sort((a: any, b: any) =>( b.name?.common - a.name?.common)));
          setCountriesFilter(response.data.sort((a: any, b: any) =>( b.name?.common - a.name?.common)));
        })
    } catch (error) {
        console.log('error.message');
        // setError(error?.message);
    }
  }, []);

  const setRegionText = (text: string) => {
    setRegion(text);
    countryList = [...countries];

    if(text && text !== 'All') {
      let list = countryList.filter((country: ICountryData) => {
          return country.region?.toLocaleLowerCase().includes(text.toLocaleLowerCase()) 
            || country.name?.common.toLocaleLowerCase().includes(text.toLocaleLowerCase())
            || country.capital?.toString().toLocaleLowerCase().includes(text.toLocaleLowerCase());
      });

      setCountriesFilter(list);
    } else{
      setCountriesFilter(countries);
    }
  }

  return (
      <>
          {countryList.map((el: any) => {
            return <div>{el.region}</div>
          })}
        <TopMenu />
        <main className="container">
          <Search searchByRegion={setRegionText} searchByText/>
          <Home region={region} countries={countriesFilter}/>
        </main> 
      </> 
  )
}

export default App
