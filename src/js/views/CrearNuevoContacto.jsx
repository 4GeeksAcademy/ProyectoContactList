import React, { useContext } from "react";
import FormuContacto from "../component/FormuContacto.jsx";

const CrearNuevoContact = () => {
  return (
    <div className="d-grid">
      <div>
        <h1 className="d-flex justify-content-center mt-5 mb-2">
          Crear un nuevo contacto
        </h1>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <FormuContacto btnName={"Create"} />
      </div>

    </div>
  );
};

export default CrearNuevoContact;
