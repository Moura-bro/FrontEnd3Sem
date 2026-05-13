import { useState } from "react"
import "./contador.css"

export default function Contador() {
    //States e Variaveis
    //funções

    const [contador, setContador] = useState(0)

    function incrementar() {

        setContador(contador + 1)
        if (contador >= 10) {
            setContador(0)
        }

    }

    function decrementar() {
        setContador(contador - 1)
        if (contador <= 0) {
            setContador(0)
        }
    }






    return (
        <div className="contador">
            <h1 className="contador__title">Contador {contador}</h1>

            <button onClick={incrementar}>Contar (++)</button>
            <br />
            <button onClick={decrementar}>Contar (--)</button>
        </div>
    )
}