// 02) Crie um componente chamado Produto que receba as seguintes props:
// nome
// preco
// descricao
// O componente deve exibir:
//    Nome do Produto
//    Preço: R$
//    Descrição do produto

// Crie pelo menos 3 produtos diferentes utilizando o componente.

import "./produto.css"

function Produto({ nome, preco, descricao }) {
    return (
        <div className="produto">
            <p className="produto__item">
                - Nome do Produto: {nome}
                - Preço: R$ {preco}
                - Descrição do produto:{descricao}
            </p>
        </div>
    )
}

export default Produto