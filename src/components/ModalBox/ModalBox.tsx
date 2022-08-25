import * as React from 'react';
import './ModalBox.css';

export const ModalBox = ( props: {
  modalBoxHeading: string,
  modalBoxSubheading: string,
  modalBoxText: string,
} ) => {
  const {
    modalBoxHeading,
    modalBoxSubheading,
    modalBoxText,
    ...rest
  } = props;

  return (
    <div className="modal-box" {...rest}>
      <div className="modal-box__content">
        <div className="modal-box__close">
          <span className="modal-box__close-button"></span>
        </div>
        <h4 className="modal-box__heading">{modalBoxHeading}</h4>
        <p className="modal-box__subheading">{modalBoxSubheading}</p>
        <p className="modal-box__text">{modalBoxText}</p>
      </div>
    </div>
  )
}

export default ModalBox