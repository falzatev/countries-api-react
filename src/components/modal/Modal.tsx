import React from 'react'


const Modal = (props: any) => {
  return (
    <div className={`modal ${props.show ? 'show' : 'hide'}`}>
        <div className="modal-content">
            {props.children}
        </div>
    </div>
  )
}

export default Modal;