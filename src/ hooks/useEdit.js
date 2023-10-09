import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const useEdit = (id) => {
  const [data, setData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      await fetch(
        `https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos/${id}.json`
      )
        .then((resp) => resp.json())
        .then((resp) => setData(resp));
    };
    getData();
   
  }, []);

console.log("data", data)
  const editData = async (e) => {
   
    await fetch(
        `https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      }
    );
    
    navigate("/")
  };

  return { data, setData, editData };
};
