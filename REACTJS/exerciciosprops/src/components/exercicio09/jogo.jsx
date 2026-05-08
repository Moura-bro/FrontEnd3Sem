// 09 ) Crie um componente chamado Jogo que receba:
// nome
// plataforma
// preco
// imagem
// Exiba todas as informações em formato de card.

import "./jogo.css"

 export default function Jogo({nome, plataforma, preco, image}){
      return(
        <>
        <p>
          Nome: {nome}
          Plataforma: {plataforma}
          preco: {preco}
        </p>

        <div>
            <img src={image} alt="" />
        </div>
        </>
      )
}