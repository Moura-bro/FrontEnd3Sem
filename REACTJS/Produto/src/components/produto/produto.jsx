import "./produto.css"
import { use, useEffect, useState } from "react"
import img from '../../assets/image.jpg'

export default function Produto() {
    //States e variaveis
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [Editar, setEditar] = useState(false)
    // const [produto, setProduto] = useState({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })

    const [arrProdutos, setArrProdutos] = useState([])

    //Cliclo de vida e funcoes
    async function cadastrarProduto(e) {
        e.preventDefault()//nao deixa o formulario ser postado

        //validar o formulario

        // alert("Funcacao Cadastrar Chamada")
        // return false


        if (nome.trim().length == 0 || descricao.trim().length == 0 ||
            isNaN(preco) || isNaN(quantidade)
        ) {
            alert("Preencha os campos coretamente")
            return false;
        }


        //gerar o objeto que vai para a API
        const objtocadastro = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            imagem: "image.jpg",
        }

        console.log(objtocadastro);


        // cadastrar na API
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                body: JSON.stringify(objtocadastro),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })

            console.log(retornoAPI);
            if (retornoAPI.status == 201) {
                const dadosCadastrados = await retornoAPI.json()
                console.log(dadosCadastrados)
                setArrProdutos([...arrProdutos, dadosCadastrados])

                LimparFormulario()
            } else {
                alert("Problema inesperado")
            }
        }
        catch (error) {
            alert("Nao foi possivel salvar os dados")
            console.log(error);

        }




        // setArrProdutos([...arrProdutos, { ...produto, id: Date.now() }])
    }//Fim da cadastrar

    function LimparFormulario() {
        setNome("")
        setDescricao("")
        setPreco(0)
        setQuantidade(0)

    }

    useEffect(() => {
        //chamar api
        getProdutos();
    }, [])


    async function getProdutos() {
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos")

            const dados = await retornoAPI.json();

            console.log(dados);

            setArrProdutos(dados)
        } catch (error) {
            console.log("Erro ao Buscar os Produtos")
            console.log(error)
        }
    }

    async function deletar(id) {
        try {
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
                method: "delete",
            });


            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto apagado com sucesso")

                const novalista = arrProdutos.filter((prod) => {
                    return prod.id != id
                })

                setArrProdutos(novalista)
            } else {
                alert("Ocorreu um erro ao tentar apagar")
            }

        } catch (error) {
            alert("Erro ao tentar excluir o Produto")
            console.log(error);

        }
    }

    async function editarProduto(e) {
        e.preventDefault()
        // alert("funcao Edicacao chamada")

        //fazer o editar(PUT)


        const objetoEditado = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            imagem: "image.jpg"
        }

        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "PUT",
                body: JSON.stringify(objetoEditado),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })

            console.log(retornoAPI);
            if (retornoAPI.status == 201) {
                const dadosCadastrados = await retornoAPI.json()
                console.log(dadosCadastrados)
                setArrProdutos([...arrProdutos, dadosCadastrados])

                LimparFormulario()
            } else {
                alert("Problema inesperado")
            }


        } catch (error) {
            alert("Nao foi possivel salvar os dados")
            console.log(error);
        }



    }


    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza" >SENAI</h1>
                <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={(Editar) ? editarProduto : cadastrarProduto}>
                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                    <input className="input--metade" type="text" id="nome" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                    <input className="input--metade" type="number" id="preco" value={preco} placeholder="Preço" onChange={(e) => setPreco(parseFloat(e.target.value))} />
                    <input className="input--metade" type="number" id="quantidade" value={quantidade} placeholder="Quantidade" onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                    <input className="input--metade" type="text" id="descricao" value={descricao} placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
                </div>

                {Editar && <button
                    type="submit"
                    className="btn--cadastro"
                    onClick={() => {
                        setEditar(false)
                        LimparFormulario()
                    }}
                >Cancelar</button>}
                {""}
                <button type="submit" className="btn--cadastro">Adicionar Produto</button>
            </form>


            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <p>Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />
                        <a href="" onClick={(e) => {
                            e.preventDefault()
                            deletar(prod.id)
                        }}>Apagar</a>



                        <button className="produtos__btn-comprar" >Comprar</button>
                        <a href="" onClick={(e) => {
                            e.preventDefault()

                            setEditar(true)
                            setNome(prod.nome)
                            setDescricao(prod.descricao)
                            setPreco(prod.preco)
                            setQuantidade(prod.quantidade)
                        }}>Editar</a>
                    </div>
                ))}
            </section>
        </>
    )
}