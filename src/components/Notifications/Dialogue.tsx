import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/scss/Modal.scss';
interface Props {
    isShowing: boolean;
    hide: React.MouseEventHandler<HTMLButtonElement>;
    children: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

const Modal = ({ isShowing, hide, children }: Props): JSX.Element =>
    isShowing
        ? ReactDOM.createPortal(
              <>
                  <div className="modal-overlay" />
                  <div className="modal-wrapper">
                      <div className="modal-container">
                          <button type="button" className="modal-close" onClick={hide}>
                              X
                          </button>
                          {children}
                      </div>
                  </div>
              </>,
              document.body,
          )
        : null;

export default Modal;
