import React, { useState } from "react";


export const useForm = () =>{
    const [data, setData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        direccion: "",
      });
      console.log(data.nombre);
      const postData = async (e) => {
        e.preventDefault();
        const response = await fetch(
          "https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos.json",
          {
            method: "POST",
            body: JSON.stringify({ ...data, id: Math.random() }),
            headers: { "Content-type": "application/json" },
          }
        );
        setData({ nombre: "", correo: "", telefono: "", direccion: "" });
        console.log(response);
        console.log(data);
      };

      return {data, setData, postData }
}
