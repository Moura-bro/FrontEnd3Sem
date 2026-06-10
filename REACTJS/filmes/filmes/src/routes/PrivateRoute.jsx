import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Children}) => {
    const {usuario} = useContext(UsuarioContext)

    return usuario ? Children : <Navigate to={"/"}/>
}

export default PrivateRoute