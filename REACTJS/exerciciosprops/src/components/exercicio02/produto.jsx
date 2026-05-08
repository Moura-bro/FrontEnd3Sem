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

function Produto ({nome, preco, descricao }){
    return (<h1> Nome do Produto: {nome}  - Preço: R$ {preco} - Descrição do produto:{descricao}
    </h1>

    )
}

export default Produto