import React, { useState, useContext } from "react";
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
    const [contact, setContact] = useState({
        name,
        phone,
        email,
        address,
    });

    const navigate = useNavigate();





    function handleChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (id) {
            await actions.actuContact(id, contact);
            navigate("/contacts");
        } else {
            await actions.crearContact(contact);
            navigate("/contacts");
            actions.obtContact(contact);
        }
    }

    return (
        <form className="col-8 mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Nombre</label>
                <input
                    name="Nombre"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={contact.name}
                />

            </div>
            <div className="mb-3">
                <label>Correo</label>
                <input
                    name="Correo"
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Correo"
                    value={contact.email}
                />

            </div>
            <div className="mb-3">
                <label>Telefono</label>
                <input
                    name="Telefono"
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
                    name="Dirección"
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