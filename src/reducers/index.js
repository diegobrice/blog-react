import { combineReducers } from "redux";
import usuariosReducer from "./usuarioReducer";
import publicacionesReducer from "./publicacionReducer";
import tareasReducer from "./tareasReducer";

export default combineReducers({
  usuariosReducer,
  publicacionesReducer,
  tareasReducer,
});
