import { useContext, useEffect, useState } from "react"
import { UsuarioContext } from "../../context/Usuariocontext"

const Perfil = () => {

    //state Global
    const { usuario, setUsuario } = useContext(UsuarioContext)

    //State local
    const [novoUsuario, setNovoUsuario] = useState("")

    const login = () => {

        setUsuario(novoUsuario)
         //pegar o dado e colocar no storage
         localStorage.setItem("usuario", JSON.stringify(novoUsuario))
         setNovoUsuario("")
    }


    


    return (
        <>
            <h2>Minha pagina de perfil</h2>
            <span>Usuario: {usuario}</span>
            <p>
                <input
                    type="text"
                    placeholder="Novo usuario"
                    value={novoUsuario}
                    onChange={(e) => {
                        setNovoUsuario(e.target.value)
                    }} />

                <button onClick={() => {
                   login()
                }}
                >Entrar</button>
            </p>
        </>
    )
}

export default Perfil