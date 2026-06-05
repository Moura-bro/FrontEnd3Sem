import { useEffect, useState } from "react"
import { UsuarioContext } from "./Usuariocontext"

const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    // const [Listausuario, setListaUsuario] = useState([])


    useEffect(() => {
        const usuarioStorage = JSON.parse(localStorage.getItem("usuario") || "null")
        setUsuario(usuarioStorage)
    },[])


    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider