import React, { useContext } from "react";
import { Context } from '../store/AppContext.jsx';

const EliminarContact = ({ modalTriggered, id, closeModal }) => {
  const { actions } = useContext(Context);

  async function handleEliminarContact() {
    try {
      await actions.borrarContact(id);
      closeModal();
    } catch (error) {
      console.error("Error al eliminar el contacto:", error);
      alert("Hubo un problema al eliminar el contacto. Intenta nuevamente.");
    }
  }

  return (
    <div
      className={`modal ${modalTriggered ? 'show' : ''}`}
      style={{ display: modalTriggered ? 'block' : 'none' }}
      role="dialog"
      aria-labelledby="modalTitle"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 id="modalTitle" className="modal-title">¿Estás seguro amigo?</h5>
            <button
              onClick={closeModal}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>El contacto se borrará</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-secondary"
            >
              No
            </button>
            <button
              onClick={handleEliminarContact}
              type="button"
              className="btn btn-primary"
            >
              Sí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliminarContact;
