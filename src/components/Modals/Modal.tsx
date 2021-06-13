import React from "react";
import ReactDOM from "react-dom";
import "../../styles/Modal.scss";

interface Props {
  isShowing: boolean;
  hide: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ isShowing, hide }: Props): JSX.Element =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal-container">
              <h2>¡Todo guay!</h2>
              Tu cuenta se ha creado correctamente
              <div className="modal-btns">
                <button type="button" className="modal-close" onClick={hide}>
                  Cerrar
                </button>
                <a href="https://nuwe.io/">
                  <button type="button" className="modal-leave">
                    Vamos para Nuwe
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
