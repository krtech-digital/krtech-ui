import * as React from 'react';
import './Modal.css';

export const Modal = ( props: { 
  modalHeading: string; 
  modalSubheading: string;
  listDarkTitle: string;
  listDarkItems: string[];
  listLightTitle: string;
  listLightItems: string[];
  } ) => {
  const { 
    modalHeading, 
    modalSubheading, 
    listDarkTitle, 
    listDarkItems,
    listLightTitle,
    listLightItems,
    ...rest 
  } = props;

  return (
    <div className="modal" {...rest}>
      <div className="modal__heading">
        <div className="modal-close-button"></div>
        <h4>{modalHeading}</h4>
        <p>{modalSubheading}</p>
      </div>
      <div className="modal__content modal__content--dark">
        <h4 className="modal__content-title">{listDarkTitle}</h4>
        <ul className="modal__content-list">
          {
            listDarkItems.map((listDarkItem, i) => (    
              <li className="modal__content-list-item" key={i}>
                <div className="modal__content-list-item-title">
                  <span className="modal__content-list-item-title-icon"></span>
                  <span className="modal__content-list-item-title-text">{listDarkItem}</span>
                </div>
                <div className="modal__content-list-item-button">{listDarkItem}</div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="modal__content">
        <h4 className="modal__content-title">{listLightTitle}</h4>
        <ul className="modal__content-list">
          {
            listLightItems.map((listLightItem, i) => (
              <li className="modal__content-list-item" key={i}>
                <div className="modal__content-list-item-title">
                  <span className="modal__content-list-item-title-icon"></span>
                  <span className="modal__content-list-item-title-text">{listLightItem}</span>
                </div>
                <div className="modal__content-list-item-button">{listLightItem}</div>
              </li>
            ))
          }
        </ul>
      </div>
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