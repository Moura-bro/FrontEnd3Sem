import "./Menu.css"
import zeroTwo from "../../assets/download (7).jpg"; 
function Menu () {
    return (
    
    
    <nav class="menu">
        <a href="#" className="menu__item">Home</a>
        <a href="#" className="menu__item">Quem somos</a>
        <a href="#" className="menu__item">Contato</a>
        <a href="#" className="menu__item menu__item--signin">Entrar</a>
        <a href="#" className="menu__item menu__item--signup">Cadstrar</a>

        <div class="card-perfil">
            <img class="card-perfil__image" src={zeroTwo} alt="Imagem do usuario"/>
        </div>

    </nav>

    );
}

export default Menu;