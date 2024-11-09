import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  m-0" style={{ backgroundColor: "#FFD700"}}>
      <div className="container-fluid ">
        <Link
          to="/"
          className="nav-link active fs-1 text-white"
          aria-current="page"
        >
          Mi lista de contactos
        </Link>

        <div
          className="collapse navbar-collapse justify-content-end fs-5 "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to="/"
              className="nav-link active text-white"
              aria-current="page"
            >
              Inicio
            </Link>

            <Link to="/CrearNuevoContact" className="nav-link active text-white">
              Crea un contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
