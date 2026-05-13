import "./botao.css"


function Botao({ texto, cor }) {
    return (
        <div className="botao">
            <button className="botao__item" style={{ backgroundColor: `${cor}`, color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", }}>
                {texto}
            </button>
        </div>


    )
}

export default Botao


