import React from 'react'
import '../../styles/modal.scss';
import ICountryData from '../../types/country.type';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  country: ICountryData;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, country}) => {
  if(!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{country.name.common}</h2>
        <p>Modal content goes here</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}

export default Modal;