import { createContext, useContext, useState, useEffect } from "react";
import React from "react";


const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    correo: "",
  });
  const [contacts, setContacs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos.json"
        );
        if (response.ok) {
          const jsonData = await response.json();
          const fetchedContacts = Object.entries(jsonData);
          setContacs(fetchedContacts);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [contacts]);

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos.json"
            );
            if (response.ok) {
              const jsonData = await response.json();
              const fetchedContacts = Object.entries(jsonData);
              setContacs(fetchedContacts);
            } else {
              throw new Error("Network response was not ok.");
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };
        await fetchData();
      } else {
        console.error("Error al eliminar el contacto");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const postData = async (e) => {
    await fetch(
      "https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos.json",
      {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: { "Content-type": "application/json" },
      }
    );
    setUserInput({ nombre: "", direccion: "", telefono: "", correo: "" });
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos.json"
        );
        if (response.ok) {
          const jsonData = await response.json();
          const fetchedContacts = Object.entries(jsonData);
          setContacs(fetchedContacts);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  };

  const store = {
    contacts,
    userInput,
  };

  const actions = {
    handleDeleteClick,
    postData,
    setContacs,
    setUserInput,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
