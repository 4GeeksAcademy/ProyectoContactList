import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from "./component/Navbar.jsx";

import { Home } from "./views/Home.jsx";
import Contacts from "./views/Contactos.jsx";
import CrearNuevoContact from "./views/CrearNuevoContacto.jsx";
import ActuContact from "./views/ActualizarContacto.jsx";

import injectContext from "./store/AppContext.jsx";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="contacts" element={<Contacts/>} />
          <Route path="crearNuevoContact" element={<CrearNuevoContact/>}></Route>
          <Route path="actualizarContact" element={<ActuContact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
