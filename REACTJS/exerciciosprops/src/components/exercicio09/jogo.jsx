// 09 ) Crie um componente chamado Jogo que receba:
// nome
// plataforma
// preco
// imagem
// Exiba todas as informações em formato de card.

import "./jogo.css"
import swt from "../../assets/Swt.jpg"

export default function Jogo({ nome, plataforma, preco, image }) {
  return (
    <>
      <div className="cardjogo">

        <img className="cardjogo__image" src={swt} alt="" />

        <p className="cardjogo__texto">
          Nome: {nome}
          Plataforma: {plataforma}
          preco: {preco}
        </p>


      </div>

    </>
  )
}