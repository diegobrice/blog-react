import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./menu";
import Usuarios from "./Usuarios";

const Tareas = () => <h1>Tareas</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Usuarios} />
        <Route exact path="/tareas" component={Tareas} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
