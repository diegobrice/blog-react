import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./Usuarios";
import Publicaciones from "./Publicaciones";
import Layout from "./Layout";

const Tareas = () => <h1>Tareas</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Layout>
          <Route exact path="/" component={Usuarios} />
          <Route exact path="/tareas" component={Tareas} />
          <Route exact path="/publicaciones/:key" component={Publicaciones} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
