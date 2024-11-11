import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Footer } from "../component/footer";

export const Home = () => (
  <div
    className="d-flex flex-column min-vh-100"
    style={{
      backgroundColor: "#f5f5dc",
      color: "white",
      paddingBottom: "50px"  // Agregar un margen inferior para asegurar que el contenido no se oculte detrás del footer
    }}
  >
    <div className="text-center flex-grow-1 d-flex justify-content-center align-items-center">
      <div className="text-center mt-5">
        <h1>Bienvenido a mi lista de contactos</h1>
        <p>
          {/* Imagen */}
          <img src="https://picsum.photos/seed/picsum/400/300" alt="Paisaje" />
        </p>
        <Link to="/contacts" className="btn btn-success align-items-center fs-5">
          Ver todos los contactos
        </Link>
      </div>
    </div>

    {/* Footer */}
    <Footer className="footer"/>
  </div>
);

