import { object } from "prop-types";
import React, { useEffect, useState, } from "react";
import { json, useNavigate } from "react-router";
import useAppContext from "../../context/AppContext";

const ContactCard = () => {
  const {store, actions} = useAppContext();
  const {contacts} = store;
  const {handleDeleteClick} = actions;

 
  
  const navigate = useNavigate()

  return (
    <ul>
      {contacts &&
        contacts?.map(([id, contacto]) => {
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
                        <button className="delete-button" onClick={ () => navigate(`/edit/${id}`)} ><i className="fa-solid fa-pen"></i></button>
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
