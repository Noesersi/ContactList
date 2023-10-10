import { Link } from "react-router-dom";
import React from "react";
import useAppContext from "../../context/AppContext";
import { useNavigate } from "react-router";

export const AddForm = () => {
  const {store, actions} = useAppContext();
  const {userInput} = store;
  const {postData, setUserInput} = actions;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedNombre = userInput.nombre.trim();
    const trimmedCorreo = userInput.correo.trim();
    const trimmedTelefono = userInput.telefono.trim();
    const trimmedDireccion = userInput.direccion.trim();

    if(trimmedNombre && trimmedCorreo && trimmedTelefono && trimmedDireccion){
      postData();
    } else {
      alert("Por favor, completa todos los campos antes de guardar el contacto.");
    }
    navigate("/");
    
  };

  return (
    <div className="addContactBox">
      <h3>Añadir contacto</h3>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>
              <strong>Nombre:</strong>
              <input
                type="text"
                value={userInput.nombre}
                onChange={(e) => setUserInput({ ...userInput, nombre: e.target.value })}
              />
            </label>
          </li>
          <li>
            <label>
              <strong>Email:</strong>
              <input
                type="email"
                value={userInput.correo}
                onChange={(e) => setUserInput({ ...userInput, correo: e.target.value })}
              />
            </label>
          </li>
          <li>
            <label>
              <strong>Phone:</strong>
              <input
                type="text"
                value={userInput.telefono}
                onChange={(e) => setUserInput({ ...userInput, telefono: e.target.value })}
              />
            </label>
          </li>
          <li>
            <label>
              <strong>Direccion:</strong>
              <input
                type="text"
                value={userInput.direccion}
                onChange={(e) =>
                  setUserInput({ ...userInput, direccion: e.target.value })
                }
              />
            </label>
          </li>
        </ul>

        <button> Save Contact </button>

        <Link to="/">get Back to contacts</Link>
      </form>
    </div>
  );
};
