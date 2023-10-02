import { useForm } from "../../ hooks/useForms";
import { Link } from "react-router-dom";
import React from "react";

export const AddForm = () => {
  const { data, setData, postData } = useForm();
  return (
    <div className="addContactBox">
      <h3>Añadir contacto</h3>
      <form onSubmit={postData}>
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
  );
};
