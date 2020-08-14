import { combineReducers } from "redux";
import usuariosReducer from "./usuarioReducer";
import publicacionesReducer from "./publicacionReducer";

export default combineReducers({
  usuariosReducer,
  publicacionesReducer,
});
