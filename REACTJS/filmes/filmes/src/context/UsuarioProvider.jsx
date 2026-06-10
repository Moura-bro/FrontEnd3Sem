import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const UsuarioProvider = ({ children }) => {
    //State--Global 
    const [usuario, setUsuario] = useState(null)


    //Puxa o Usuario do Localstorage
    useEffect(() => {
       const usuarioStorage = JSON.parse(localStorage.getItem("usuario") || null)
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