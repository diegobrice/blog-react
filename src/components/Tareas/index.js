import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as tareasActions from "../../actions/tareasActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";

class Tareas extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.tareas).length) {
      this.props.traerTodas();
    }
  }

  componentDidUpdate() {
    const {tareas,cargando,traerTodas} = this.props;

    if (!Object.keys(tareas).length && !cargando) {
      traerTodas();
    }
  }

  mostrarContenido = () => {
    const { tareas, cargando, error } = this.props;

    if (error) {
      return <Fatal mensaje={error.message} />;
    }

    if (cargando) {
      return <Spinner />;
    }

    return Object.keys(tareas).map((usu_id) => (
      <div key={usu_id} className="contenedor">
        <h3>Usuario {usu_id}</h3>
        <div className="contenedor_tareas">{this.ponerTareas(usu_id)}</div>
      </div>
    ));
  };

  ponerTareas = (usu_id) => {
    const { tareas, cambioCheck, eliminar } = this.props;
    const por_usuario = {
      ...tareas[usu_id],
    };

    return Object.keys(por_usuario).map((tar_id) => (
      <div key={tar_id}>
        <input
          type="checkbox"
          defaultChecked={por_usuario[tar_id].completed}
          onChange={() => cambioCheck(usu_id, tar_id)}
        />
        {por_usuario[tar_id].title}
        <Link to={`/tareas/guardar/${usu_id}/${tar_id}`}>
          <button className="m_left">Editar</button>
        </Link>
        <button className="m_left" onClick={() => eliminar(tar_id)}>
          Eliminar
        </button>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h2>Tareas</h2>

        <Link to="/tareas/guardar">
          <button>Guardar</button>
        </Link>

        {this.mostrarContenido()}
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Tareas);
