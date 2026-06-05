import { useContext } from "react"
import { UsuarioContext } from "../../context/Usuariocontext"

 const  Mypage = () => {
const {usuario} = useContext(UsuarioContext)

    return(
        <div>
        <h2>Meu Bloge</h2>
        <p>Dados do Usuario: {usuario}</p>
        </div>
    )
}

export default Mypage