import "./botao.css"


function Botao ({texto, cor}){
    return (
        
        <button style={{backgroundColor: `${cor}`, color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer",}}>
            {texto} 
        </button>
       

    )
}

export default Botao


