// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// // O curso

import "./aluno.css"
import swt from "../../assets/Swt.jpg"

function Aluno({ nome, curso, image }) {
    return (
        <>
            <div className="aluno">

            <img className ="aluno__image" src={swt} alt="#" />

                <p className="aluno__matricula">
                    Nome: {nome}
                    Curso:{curso}
                </p>

            </div>


        </>


    )
}
export default Aluno

