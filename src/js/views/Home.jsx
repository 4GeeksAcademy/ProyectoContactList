import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
  <div className="vw-100 d-flex align-items-center justify-content-center" style={{ 
    backgroundColor: "#f5f5dc",   // Fondo azul
    minHeight: '1212px',             // Asegura que el fondo cubra toda la pantalla
    color: 'white'                  // Color de texto blanco para mejor legibilidad
  }}>
    <div className="text-center mt-5">
      <h1>Bienvenido a mi lista de contactos</h1>
      <p>
        {/* Genera imagenes */}
        <img src="https://picsum.photos/seed/picsum/400/300" alt="Paisaje" />
      </p>
      <Link to="/contacts" className="btn btn-success align-items-center fs-5">
        Ver todos los contactos
      </Link>
    </div>
  </div>
);

