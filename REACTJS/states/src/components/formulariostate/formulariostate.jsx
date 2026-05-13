import { use } from "react"
import "./formulariostate.css"
import { useState } from "react"

export default function Formulariostate(){
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")

    function pegarSobrenome(evento){
        setSobrenome(evento.target.value)
    }

    return (
        <div>
            <h2>Formulario com State</h2>
            <label htmlFor="nome">Nome</label>
            <br />
            <input 
            type="text" 
            placeholder="Digite seu nome"
            onChange={(evento) => {
                setNome(evento.target.value)
            }}
            />

            <br />

            <label htmlFor="sobrenome">Sobrenome</label>
            <br />
            <input 
            type="text" 
            placeholder="Digite seu Sobrenome"
            onChange={pegarSobrenome}
            />
            <br />
            <label htmlFor="">Texto digitado:<strong>{nome} {sobrenome} </strong></label>
        </div>
    )
}