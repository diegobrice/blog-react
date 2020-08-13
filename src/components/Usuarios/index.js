import React, { Component } from "react";
import axios from "axios";

class Usuarios extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    this.setState({
      usuarios: data,
    });
  }

  ponerFilas = () =>
    this.state.usuarios.map((usuario) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>{this.ponerFilas()}</tbody>
        </table>
      </div>
    );
  }
}

export default Usuarios;
