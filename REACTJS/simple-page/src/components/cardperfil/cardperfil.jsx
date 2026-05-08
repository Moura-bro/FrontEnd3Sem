import "./cardperfil.css"
import zeroTwo from "../../assets/download (7).jpg"; 



function CardPerfil() {
    return (

        <div className="card-perfil">
            <img className="card-perfil__image" src={zeroTwo} alt="Imagem do usuario" />
        </div>

    )
}

export default CardPerfil