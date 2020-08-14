import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import Tabla from "./Tabla";

class Usuarios extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.traerTodos();
    }
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />;
    }

    return <Tabla />;
  };

  render() {
    return (
      <div className="App">
        <h2>Usuarios</h2>
        {this.ponerContenido()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
