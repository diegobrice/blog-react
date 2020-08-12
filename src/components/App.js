import React from "react";

function App() {
  const ponerFilas = () => [
    <tr>
      <td>Diego</td>
      <td>diegobricep@gmail.com</td>
      <td>@diegobrice</td>
    </tr>,
    <tr>
      <td>User</td>
      <td>correo@gmail.com</td>
      <td>@user</td>
    </tr>,
  ];

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
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
}

export default App;
