const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		apiUrl: "https://playground.4geeks.com/contact/agendas/AgendaAlejandroC",
		contacts: [],
		ContactEditado: {},
		ConfirmacionEliminarContact: {},
	  },
	  actions: {
		actualizarContactEditado: (contact) => {
		  setStore({ ContactoEditado: contact });
		},
  



		borrarContactConfirmacionEliminarContact: (contact) => {
		  setStore({ ConfirmacionEliminarContacto: contact });
		},
  



		obtContacts: async () => {
		  const actions = getActions();
		  const store = getStore(); // nos devuelve los valores
		  try {
			const response = await fetch(store.apiUrl);
			if (response.status === 404) {
			  await actions.crearAgenda();
			  return;
			}
			const data = await response.json();
			setStore({ contacts: data.contacts });
		  } catch (e) {
			console.error(e);
		  }
		},
  



		crearAgenda: async () => {
		  const store = getStore();
		  try {
			const response = await fetch(store.apiUrl, {
			  method: "POST",
			});
		  } catch (e) {
			console.error(e);
		  }
		},
  



		crearContact: async (contacto) => {
		  const store = getStore();
		  try {
			const response = await fetch(store.apiUrl + "/contacts", {
			  method: "POST",
			  body: JSON.stringify({
				...contacto,
			  }),
			  headers: {
				"Content-type": "application/json",
			  },
			});
			if (response.ok) {
			  console.log("Contacto creado");
			}
		  } catch (e) {
			console.error(e);
		  }
		},
  



		actuContact: async (id, contacto) => {
		  const store = getStore();
		  const actions = getActions(); // traer la función que nos trae los contacts
		  try {
			const response = await fetch(store.apiUrl + "/contacts" + `/${id}`, {
			  method: "PUT",
			  body: JSON.stringify(contacto),
			  headers: { "Content-type": "application/json" },
			});
			const data = await response.json();
			// cuando actualice traiga los contactos
			actions.obtContacts();
		  } catch (e) {
			console.log(e);
		  }
		},
  



		borrarContact: async (id) => {
		  try {
			const store = getStore();
			const response = await fetch(store.apiUrl + "/contacts" + `/${id}`, {
			  method: "DELETE",
			});
			if (!response.ok) {
			  alert("No se puede borrar");
			  throw new Error("No se pudo borrar el contacto");
			} else {
			  const filteredContacts = store.contacts.filter(
				(contact) => contact.id !== id
			  );
			  setStore({ contacts: filteredContacts });
			}
		  } catch (e) {
			console.error(e);
		  }
		},
	  },
	};
  };
  
  export default getState;
  