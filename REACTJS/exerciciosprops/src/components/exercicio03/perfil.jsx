
// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.


import "./perfil.css"

function Perfil ({nome,idade,profissao}){
    return (<p> Nome: {nome}  |Idade:{idade}  |Profissao{profissao}</p>)
}

export default Perfil