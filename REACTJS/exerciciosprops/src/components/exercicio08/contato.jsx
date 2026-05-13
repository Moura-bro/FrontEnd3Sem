// 08) Crie um componente chamado Contato que receba:
// nome
// telefone
// email
// Depois:
// Crie uma lista com 5 contatos
// Exiba todos utilizando o componente

import "./contato.css"

function Contato({ nome, telefone, email }) {
    return (
        <div className="contato">
            <p className="contato__cadastro">
                Nome: {nome}
                Telefone: {telefone}
                email:{email}
            </p>
        </div>
    )
}

export default Contato
