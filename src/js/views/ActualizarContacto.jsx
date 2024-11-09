import React, { useContext } from "react";
import { Context } from "../store/AppContext.jsx";
import FormuContact from "../component/FormuContacto.jsx";

const ActuContact = () => {
  const { store } = useContext(Context);
  return (
    <div className="d-grid">
      <div>
        <h1 className="d-flex justify-content-center mt-5 mb-5">
          Actualizar un contacto
        </h1>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <FormuContact
          btnName={"Update"}
          name={store.contactToEdit.name}
          phone={store.contactToEdit.phone}
          email={store.contactToEdit.email}
          address={store.contactToEdit.address}
          id={store.contactToEdit.id}
        />
      </div>
    </div>
  );
};

export default ActuContact;
