import React from "react"
import { useParams, useNavigate } from "react-router"
import { useEdit } from "../../ hooks/useEdit";
import { Link } from "react-router-dom";



export const EditContact = () => {
    const params = useParams();
    const {data, setData, editData } = useEdit(params.id);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const trimmedNombre = data.nombre.trim();
      const trimmedCorreo = data.correo.trim();
      const trimmedTelefono = data.telefono.trim();
      const trimmedDireccion = data.direccion.trim();

      if(trimmedNombre && trimmedCorreo && trimmedTelefono && trimmedDireccion){
        editData();
      } else {
        alert("Por favor, completa todos los campos antes de editar el contacto.");
      }
    };

    return (
        <div className="addContactBox">
      <h3>Añadir contacto</h3>
      <form onSubmit={handleSubmit} >
        <ul>
          <li>
            <label>
              <strong>Nombre:</strong>
              <input
                type="text"
                value={data.nombre}
                onChange={(e) => setData({ ...data, nombre: e.target.value })}
              />
            </label>
          </li>
          <li>
            <label>
              <strong>Email:</strong>
              <input
                type="text"
                value={data.correo}
                onChange={(e) => setData({ ...data, correo: e.target.value })}
              />
            </label>
          </li>
          <li>
            <label>
              <strong>Phone:</strong>
              <input
                type="text"
                value={data.telefono}
                onChange={(e) => setData({ ...data, telefono: e.target.value })}
              />
            </label>
          </li>
          <li>
            <label>
              <strong>Direccion:</strong>
              <input
                type="text"
                value={data.direccion}
                onChange={(e) =>
                  setData({ ...data, direccion: e.target.value })
                }
              />
            </label>
          </li>
        </ul>
        <button> Save Contact </button>
        

        <Link to="/">get Back to contacts</Link>
      </form>
    </div>
    )
}