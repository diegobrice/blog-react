import React from "react";
import { connect } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tabla = (props) => {
  const ponerFilas = () =>
    props.usuarios.map((usuario, key) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
        <td>
          <Link to={`/publicaciones/${key}`}>
            <FaRegEye />
          </Link>
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.usuariosReducer;
};

export default connect(mapStateToProps, null)(Tabla);
