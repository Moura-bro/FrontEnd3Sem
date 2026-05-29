import "./CadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../services/services"
import Swal from "sweetalert2"
import { Alerta } from "../../components/Alerta/alerta"

const CadastroGenero = () => {

    //Variaveis e states
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])
    const [editar, setEditar] = useState(false)
    const [Id, setId] = useState();




    //funcoes e ciclo de vida
    const getGeneros = async () => {
        //chama a API
        try {
            const retornoAPI = await api.get("/Genero")

            setListaGeneros(retornoAPI.data)
        } catch (error) {
            alert("Problemas ao carregar os dados da API")
        }
        //preenche o array listaGeneros
    }


    //Ciclo de vida
    useEffect(() => {
        getGeneros()
    }, [])

    const cadastrarGenero = async (e) => {
        e.preventDefault()

        if (valor.trim().length == 0) {
            // alert("Preenchaer o genero")
            Alerta({
                title: 'Cadastro de Genero!',
                text: 'Preencher o genero',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            // Swal.fire({
            //     title: 'Cadastro de Genero!',
            //     text: 'Preencher o genero',
            //     icon: 'error',
            //     confirmButtonText: 'OK'
            // })
            return false
        }

        const objetocadastro = {
            idGenero: crypto.randomUUID(),
            nome: valor
        }


        try {
            const retornoAPI = await api.post("/Genero", objetocadastro)
            Alerta({
                title: 'Cadastro de Genero!',
                text: `${valor} Cadastraso com Sucesso`,
                icon: 'success',
                confirmButtonText: 'OK'
            })

            getGeneros()

            limparFormulario()

            //limpar campos
        } catch (error) {
            // alert("Erro ao cadastrar na API")
            Alerta({
                title: 'Cadastro de Genero!',
                text: 'Erro ao cadastrar na API',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            console.log(error)
        }

        // alert("Função Cadastrar Genero em desevolvimento")
    }// Fim da func cadastrar genero

    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setId(0)
    }


    const excluirGenero = async (item) => {

        // if (!confirm(`Tem certeza que deseja excluir o gênero de ${item.nome}?`)) {
        //     return false
        // }
        const result = await Alerta({
            title: "Cadastro de genero?",
            text: `Deseja excluir o Genero ${item.nome}?!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff0202ff",
            cancelButtonColor: "#a4a4a4ff",
            confirmButtonText: "Deletar",
            cancelButtonText: "Cancelar"
        })

        if(!result.isConfirmed)
        {
            return false
        }


       
        try {

            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            if (retornoAPI.status == 200 || retornoAPI.status == 204) {
                // alert("Gênero excluído com sucesso!")
                Alerta({
                    title: 'Excluir Genero',
                    text: `${valor} Excluido com Sucesso`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

                getGeneros()
            } else {
                // alert("Ocorreu um erro ao excluir o gênero.")
                Alerta({
                    title: 'Excluir Genero',
                    text: 'Ocorreu um erro ao excluir o gênero.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }


        } catch (error) {
            alert("Ocorreu um erro ao excluir o gênero.")
            console.log(error)
        }
    };//Fim da funcao excluir


    //Mostra os dados no Formulario para o usuario ajustar
    const preEditar = (item) => {
        setEditar(true)
        setValor(item.nome)
        setId(item.idGenero)
    }



    //Editar genero
    const editarGenero = async (e, item) => {
        e.preventDefault();

        //validar o formulario
        if (valor.trim().length == 0) {
            // alert("Preencha os campos corretamente");
            Alerta({
                title: 'Editar Genero!',
                text: 'Preencha os campos corretamente',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return false;
        }

        const objEditado = {
            idGenero: Id,
            Nome: valor,
        };

        try {
            const retornoAPI = await api.put(`/Genero/${Id}`, objEditado);
            // alert("Genero editado com sucesso");
             Alerta({
                title: 'Editar Genero!',
                text: 'Genero editado com sucesso',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            getGeneros();
            limparFormulario();
        } catch (error) {
            console.log(error);
            // alert("Ocorreu algum erro ao editar, tente novamente mais tarde");
             Alerta({
                title: 'Editar Genero!',
                text: 'Ocorreu algum erro ao editar, tente novamente mais tarde',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    };

//---------------------------------------------------------------------
    return (
        <>
            <Header />
            <main>
                {/*Form de cadastro de genero*/}
                <Cadastro
                    //Define o título que será exibido no formulário
                    tituloCadastro="Cadastro de Gênero"
                    // esconde o select de genero
                    visibilidade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="gênero"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    //Valor atual do campo de texto
                    valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                />
                {/*Lista de Generos*/}
                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"


                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}
                />

            </main>
            <Footer />
        </>

    )
}

export default CadastroGenero