import "./Login.css"
import Botao from "../../components/botao/Botao"
import Logo from "../../assets/img/logo.svg"
import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"



const Login = () => {


    //State global
    const { usuario, setUsuario } = useContext(UsuarioContext)

    //State local
    const [email, setEmail] = useState("")

    const LoginEmail = (e) => {
        e.preventDefault()

        setUsuario(email)
        //Pegar o dado e colocar no storage
        localStorage.setItem("usuario", JSON.stringify(email))
        setEmail("")
    }




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
                            <input type="password" name="senha" placeholder="Digite sua senha" />
                        </div>
                    </div>
                    <Botao nomeDoBotao="Entrar" />
                </form>
            </section>
        </main>
    )
}

export default Login