import React, { useState, useEffect } from "react";
import axios from "axios";
const AppNew = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsuarios(data);
    })();
  }, []);

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppNew;
