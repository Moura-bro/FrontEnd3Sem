import "./Login.css"
import Botao from "../../components/botao/Botao"
import Logo from "../../assets/img/logo.svg"
import { useContext, useEffect, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useNavigate } from "react-router-dom"
import { Alerta } from "../../components/Alerta/alerta"
import api from "../../services/services"
import { jwtDecode } from "jwt-decode"


const Login = () => {


    //State global
    const { usuario, setUsuario } = useContext(UsuarioContext)

    //State local
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()



    const LoginEmail = async (e) => {
        e.preventDefault()

        if (email.trim().length == 0 || senha.trim().length == 0) {
            Alerta({
                title: 'Login!',
                text: 'Preencher todos os campos',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
            return false;
        }
        //--------------------------------

        const dadosLogin = {
            email: email,
            senha: senha,
        }



        try {
            const retornoAPI = await api.post("/Login", dadosLogin)

            console.log("Retorno da API");
            console.log(retornoAPI.data);

            const token = retornoAPI.data.token
            const usuarioDecoded = jwtDecode(token)
            console.log(usuarioDecoded);



            //Antes de Cadastrar os dados no localtorage, deve buacar os daos da API(O codigo a cima )--------------------------------------------------
            setUsuario(usuarioDecoded)
            //Pegar o dado e colocar no storage
            localStorage.setItem("usuario", JSON.stringify(usuarioDecoded))
            setEmail("")
            setSenha("")

            navigate("/generos")

        } catch (error) {
 

            Alerta({
                title: 'Login!',
                text: 'Usuario ou Senha ivalidos',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }



    }//Fin do LoginEmail


    const verificaLogin = () => {
        const logado = localStorage.getItem("usuario") // tire o JSON.stringify aqui

        if (logado !== null && logado !== undefined) {
            // não precisa setar o usuario aqui, só navegar
            navigate("/generos")
        }
    };


    useEffect(() => {
        verificaLogin()
    }, [])//Fim do useEffect

    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />
                <form action="" className="form_login" onSubmit={LoginEmail}>
                    <h1>Login</h1>
                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" placeholder="Digite sua senha" onChange={(e) => {
                                setSenha(e.target.value)
                            }} />
                        </div>
                    </div>
                    <Botao nomeDoBotao="Entrar" />
                </form>
            </section>
        </main>
    )
}//Fim do Login

export default Login