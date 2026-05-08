// 05) Crie um componente chamado Filme que receba:
// titulo
// ano
// genero
// nota
// Mostre todas as informações na tela.
// Crie pelo menos 3 filmes diferentes.

import "./filme.css"

function Filme ({titulo, ano, genero, nota}){
    return(
        <p>
            Titulo: {titulo}
            Ano: {ano}
            Genero: {genero}
            Nota: {nota}
        </p>
    )
}

export default Filme

