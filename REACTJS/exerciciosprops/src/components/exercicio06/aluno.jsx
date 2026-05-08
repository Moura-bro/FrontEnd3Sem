// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// // O curso

import "./aluno.css"

function Aluno({nome,curso,image}){
    return(
        <>
        <div>
            <p>
                Nome: {nome}
                Curso:{curso}
            </p>
        </div>

            <img src="{image}" alt="#" />

        </>

        
    )
}
export default Aluno

