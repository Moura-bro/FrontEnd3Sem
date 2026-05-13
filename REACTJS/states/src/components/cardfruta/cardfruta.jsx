import { useState } from "react"
import "./cardfruta.css"

export default function CadFruta() {
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState()

    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Melão", quantidade: 12 },
        { id: 2, nome: "Abacaxi", quantidade: 23 }
    ])

    function cadastrar(e) {
        e.preventDefault()
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])

        setFruta("")
        setQuantidade(0)

    }
    
   


    return (
        <section className="sessao-cadastro">
            <h2>Cadstro</h2>

            {/*Formulario cadastro*/}
            <form action="" onSubmit={cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">Digite o  nome da fruta</label>
                </fieldset>
                <input
                    type="text"
                    id="fruta"
                    value={fruta}
                    placeholder="Ex:Limão"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                />


                <fieldset className="cadastro">
                    <label htmlFor="Quantidade" className="cadastro__rotulo">Digite Quantidae de Frutas:</label>
                </fieldset>

                <input
                    type="number"
                    id="Quantidade"
                    value={quantidade}
                    placeholder="xx"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setQuantidade(e.target.value)
                    }}
                />

                <br />
                <button type="submit" className="cadastro__btncadastrar">Cadastrar</button>

            </form>

            <div className="resultados">
                <ul>
                    {
                        arrFrutas.map((F) => {
                            return (
                                <li key={F.id}>
                                    <strong>Fruta: {F.nome}</strong>
                                    <strong>   quantidade: {F.quantidade}</strong>
                                </li>

                            )
                        })
                    }

                </ul>
            </div>
        </section>
    )
}