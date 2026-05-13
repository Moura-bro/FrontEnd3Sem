import { useState } from "react"
import "./itemloja.css"

export default function Itemloja({ nome, preco, estoque, categoria, checagem}) {
        if(estoque <=0){
            checagem = "Produto-indisponível"
        }else{
             checagem = "Produto-disponivel"
        }
    


    return (
        <div className="loja">
            <p className="loja_item">
                |Nome: {nome}
                |preco: {preco}
                |categoria: {categoria}

                |estoque: {estoque}
                |{checagem}
            </p>
        </div>
    )

}