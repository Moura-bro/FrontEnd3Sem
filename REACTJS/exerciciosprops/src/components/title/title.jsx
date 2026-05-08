import "./title.css"
//destructuring
function Title ({Texto, Sobrenome, idade}) {
    return (
    <h1>{Texto} {Sobrenome} {idade}</h1>
)
}

export default Title