import * as React from 'react';
import './Modal.css';

export const Modal = ( props: { 
  modalHeading: string,
  modalSubheading: string,
  modalListContent: { 
    title: string,
    items: string[]
  }[]
  } ) => {
  const { 
    modalHeading,
    modalSubheading,
    modalListContent,
    ...rest 
  } = props;

  return (
    <div className="modal" {...rest}>
      <div className="modal__heading">
        <div className="modal-close-button"></div>
        <h4>{modalHeading}</h4>
        <p>{modalSubheading}</p>
      </div>
      {modalListContent.map((modalContent, i) => (
        <div className="modal__content modal__content" key={i}>
          <h4 className="modal__content-title">{modalContent.title}</h4>
          <ul className="modal__content-list">
            {modalContent.items.map((item, i) => (  
              <li className="modal__content-list-item" key={i}>
                <div className="modal__content-list-item-title">
                  <span className="modal__content-list-item-title-icon"></span>
                  <span className="modal__content-list-item-title-text">{item}</span>
                </div>
                <div className="modal__content-list-item-button">{item}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="modal__content-buttons">
        <div className="modal__content-button-close">
          <span>Close</span>
        </div>
        <div className="modal__content-button-save">
          <span className="modal__content-button-save-icon"></span>
          <span>Save</span>
        </div>
      </div>
    </div>
  )
}

export default Modal