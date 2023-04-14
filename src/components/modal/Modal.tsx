import React from 'react'
import { useTheme } from '../../contexts/Providers';
import '../../styles/modal.scss';
import ICountryData from '../../types/country.type';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  country: ICountryData;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, country}) => {

  const { theme, setTheme } = useTheme();

  if(!isOpen) return null;

  let LanguageLenth = Object.entries(country.name.nativeName).length;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={"modal" + (theme === 'dark' ? ' dark__mode' : '')} onClick={(e) => e.stopPropagation()}>
        <div className="country-flag">
          <figure>
            <img src={country.flags['svg']} alt="" className="flag__img" />
          </figure>
        </div>
        <div className="country-description">
          <h2>{country.name.common}</h2>
          <div>
            <label className="desciption__label"><span>Native Name: </span>{Object.entries(country.name.nativeName)[LanguageLenth - 1][1].common}</label>
            <label className="desciption__label"><span>Population: </span>{country.population}</label>
            <label className="desciption__label"><span>Region: </span>{country.region?.toString()}</label>
            <label className="desciption__label"><span>Sub Region: </span>{country.subregion}</label>
            <label className="desciption__label"><span>Capital: </span>{country.capital}</label>                 
          </div>

          <div>
            <div className="country__currency">
              <label className="desciption__label"><span>Top Level Domain: </span>{country.tld}</label>
              <label className="desciption__label"><span>Currencies: </span>{Object.entries(country.currencies)[0][1].name}</label>
              <label className="desciption__label"><span>Languages: </span>{Object.entries(country.languages)[0][1]}</label>            
            </div>  

            <div className="country__borders">
              <h4>Borders: </h4>
              {country.borders?.map((border: string, index: number) => (
                <span key={index} className={'border' + (theme === 'dark' ? ' light__label' : '')}>{border}</span>
              ))}            
            </div>

          </div>
          <button onClick={onClose}>Close Modal</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;