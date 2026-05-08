import "./itemloja.css"

export default function Itemloja ({nome, preco , estoque ,categoria}) {
    if(estoque > 0){
        console.log("Produto-disponivel")
       
    }else{
        console.log("Produto-indisponível")
    }

    return(
       <p>
        |Nome: {nome}
        |preco: {preco}
        |categoria: {categoria}

        |estoque: {estoque}
       </p>
    )

}