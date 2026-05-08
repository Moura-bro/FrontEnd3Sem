import "./produtos.css"

export default function Produtos() {
    const Produtos = [
        {

            nome: "Tenis de marca",
            preco: 550,
            Descricao: "Tenis chique"

        },

        {

            nome: "Camiseta de marca",
            preco: 550,
            Descricao: "Camiseta chique e comfortavel"

        },

    ]

    return (
        Produtos.map((produtinho) => {

            return (
                <Produtos
                    nome={produtinho.nome}
                    preco={produtinho.preco}
                    Descricao={produtinho.Descricao}/>
            )
        })
    )
}