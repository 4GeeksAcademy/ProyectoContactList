import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/AppContext.jsx";
import { useNavigate } from "react-router";

const FormuContact = ({
    btnName,
    name = "",
    phone = "",
    address = "",
    email = "",
    id,
}) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    // Estado para el contacto
    const [contact, setContact] = useState({
        name: name || "",
        phone: phone || "",
        email: email || "",
        address: address || "",
    });

    // useEffect solo se ejecuta cuando el id cambia
    useEffect(() => {
        // Si hay un id (esto indica que es un contacto existente a editar)
        if (id) {
            setContact({
                name: name || "",
                phone: phone || "",
                email: email || "",
                address: address || "",
            });
        }
    }, [id, name, phone, email, address]); // Dependencias para actualizaciones de contacto

    // Función para manejar cambios en los campos del formulario
    function handleChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    // Función para manejar el envío del formulario
    async function handleSubmit(e) {
        e.preventDefault();
        if (id) {
            // Si el id está presente, actualizamos el contacto
            await actions.actuContact(id, contact);
            navigate("/contacts");
        } else {
            // Si no hay id, creamos un nuevo contacto
            await actions.crearContact(contact);
            navigate("/contacts");
            actions.obtContact(contact); // Opcional: obtiene los contactos después de la creación
        }
    }

    return (
        <form className="col-8 mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Nombre</label>
                <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={contact.name}
                />
            </div>
            <div className="mb-3">
                <label>Correo</label>
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    placeholder="Correo"
                    value={contact.email}
                />
            </div>
            <div className="mb-3">
                <label>Telefono</label>
                <input
                    name="phone"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Telefono"
                    value={contact.phone}
                />
            </div>
            <div className="mb-3">
                <label>Dirección</label>
                <input
                    name="address"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Dirección"
                    value={contact.address}
                />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-primary col-8 text-center">
                    {btnName}
                </button>
            </div>
        </form>
    );
};

export default FormuContact;
