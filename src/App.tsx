import { useState, useEffect } from 'react'
import TopMenu from './components/topMenu/TopMenu';
import Search from './components/search/Search';
import Home from './components/home/Home';

import './styles/App.scss';
import api from './http-common/http-common';
import ICountryData from './types/country.type';
import Modal from './components/modal/Modal';

import { CountryProvider, useTheme } from './contexts/ThemeProvider';
import { useCountry } from './contexts/ThemeProvider';


const App: React.FC =() => {

  const { theme, setTheme } = useTheme();
  const { country, setCountry } = useCountry();

  const [region, setRegion] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [countries, setCountries] = useState<ICountryData[]>([]);
  const [countriesFiltered, setCountriesFiltered] = useState<ICountryData[]>([]);
  
  let countryList: ICountryData[] = [];

  useEffect(() => {
    try {
        api.get('all')
        .then( response =>{ 
          let order = response.data.sort(function(a: ICountryData, b: ICountryData) {
            // if (a.name?.common < b.name?.common) return -1;
            // if (b.name?.common < a.name?.common) return 1;
            // return 0;
            return a.name?.common.localeCompare(b.name?.common);
          });
          
          setCountries(order);
          setCountriesFiltered(order);
        })
    } catch (error) {
        console.log('error.message');
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const setRegionText = (text: string) => {
    setRegion(text.trim());

    if(text.trim() && text.trim() !== 'All') {
      let list = countries.filter((country: ICountryData) => {
          return country.region?.toLocaleLowerCase().includes(text.trim().toLocaleLowerCase()) 
            || country.name?.common.toLocaleLowerCase().includes(text.trim().toLocaleLowerCase())
            || country.capital?.toString().toLocaleLowerCase().includes(text.trim().toLocaleLowerCase());
      });

      setCountriesFiltered(list);
    } else{
      setCountriesFiltered(countries);
    }
  }

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
      <>
          {/* {countryList.map((el: any) => {
            return <div>{el.region}</div>
          })} */}
        <TopMenu handleToggleTheme={handleToggleTheme} theme={theme} />
        <main className="container">
          <Search searchByRegion={setRegionText} />
          <Home 
            region={region} 
            countries={countriesFiltered} 
            handleModalOpen={handleModalOpen}
          />

          <Modal isOpen={modalIsOpen} onClose={handleModalClose} country={country} />
        </main> 
      </> 
  )
}

export default App;
