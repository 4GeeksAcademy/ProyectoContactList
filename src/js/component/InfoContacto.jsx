import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EliminarContact from "./ConfirmacionEliminarContacto.jsx";

import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/AppContext.jsx";

const InfoContact = ({ name, email, address, phone, id }) => {
  const { actions } = useContext(Context);
  const [abrirModal, setAbrirModal] = useState(false);
  const navigate = useNavigate();

  function manipularParaEditar(contact) {
    actions.actuContact(contact);
    navigate("/actualizarContact");
  }

  function manipularAbrirModal() {
    setAbrirModal(true);
  }

  function manipularCerrarModal() {
    setAbrirModal(false);
  }



  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://picsum.photos/200/200?people"
            className="d-flex mx-auto img-fluid rounded-circle mt-3 mb-3"
            alt="people"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-inline">
            <h5 className="card-title mb-3">{name}</h5>
            <div className="ms-5">
              <div className="col-md-10 d-flex justify-content-end mx-auto">
                <div className="pe-5">
                  <span
                    onClick={() =>
                      manipularParaEditar({ name, phone, email, address, id })
                    }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                </div>
                <div className="pe-5">
                  <span onClick={manipularAbrirModal}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                </p>
              </div>
              <div>{address}</div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </p>
              </div>
              <div>
                <div>{phone}</div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </p>
              </div>
              <div>{email}</div>
            </div>
          </div>
        </div>
      </div>
      <EliminarContact
        modalTriggered={abrirModal}
        id={id}
        cerrarModal={manipularCerrarModal}
      />
    </>
  );
};

export default InfoContact;