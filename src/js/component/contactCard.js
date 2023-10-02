import { object } from "prop-types";
import React, { useEffect, useState, } from "react";
import { json, useNavigate } from "react-router";

const ContactCard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos.json"
        );

        if (response.ok) {
          const jsonData = await response.json();
          console.log(jsonData);
          const contacts = Object.entries(jsonData);

          setData(contacts);
        } else {
          console.error("Error al obtener datos");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Contacto eliminado con éxito");
        // Actualizar el estado o realizar otras acciones después de eliminar el contacto si es necesario
        setData(data.filter(([contactId, contacto]) => contactId !== id));
      } else {
        console.error("Error al eliminar el contacto");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigate = useNavigate()

  return (
    <ul>
      {data &&
        data?.map(([id, contacto]) => {
          return (
            <li key={id} id={id} className="">
              <div className="container mt-5">
                <div className="card mb-3 ">
                  <div className="row g-5">
                    <div className="col-md-3 d-flex align-items-center ">
                      <img
                        src="https://img.freepik.com/foto-gratis/concepto-libertad-senderista-montana_23-2148107064.jpg?size=626&ext=jpg&ga=GA1.2.1181525329.1687869045&semt=sph"
                        className="img-fluid rounded-circle img-fluid-custom"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 ml-6">
                      <div className="card-body ms-4">
                        <h5 className="card-title">{contacto.nombre}</h5>
                        <p className="card-text">
                          <i className="fa-solid fa-location-dot icon"></i>
                          {contacto.direccion}
                        </p>
                        <p className="card-text">
                          <i className="fa-solid fa-phone icon"></i>
                          {contacto.telefono}
                        </p>
                        <p className="card-text">
                          <i className="fa-solid fa-envelope icon"></i>
                          {contacto.correo}
                        </p>
                      </div>
                      <div className="button-container">
                        <button className="delete-button" onClick={() => handleDeleteClick(id)}><i className="fa-solid fa-trash"></i></button>
                      </div>
                      <div className="button-container-bottom">
                        <button className="delete-button" onClick={ () => navigate(`/edit/${id}`)} ><i class="fa-solid fa-pen"></i></button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactCard;
