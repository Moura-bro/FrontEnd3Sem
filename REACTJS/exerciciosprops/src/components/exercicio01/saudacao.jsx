// 01) Crie um componente chamado Saudacao que receba uma prop chamada nome.
// O componente deve exibir a mensagem:
// Olá, [nome]! Seja bem-vindo(a)!
// Depois, utilize o componente 3 vezes passando nomes diferentes.


import "./Saudacao.css"

function Saudacao ({nome}){
    return (
        <div className="saudacao">
            <p className="saudacao__frase">Olá, {nome}! Seja bem-vindo(a)!</p>
        </div>
    )
}

export default Saudacao