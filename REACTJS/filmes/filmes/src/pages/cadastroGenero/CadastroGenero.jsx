import "./CadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../services/services"

const CadastroGenero = () => {

    //Variaveis e states
    const getGeneros = async () => {
        //chama a API
        try {
            const retornoAPI = await api.get("/Genero")

            setlistaGeneros(retornoAPI.data)
        } catch (error) {
            alert("Problemas ao carregar os dados da API")
        }
        //preenche o array listaGeneros
    }




    //Ciclo de vida
    useEffect(() => {
        getGeneros()
    }, [])


    const [valor, setValor] = useState("")
    const [listaGeneros, setlistaGeneros] = useState([])




    //funcoes e ciclo de vida
    const cadastrarGenero = async (e) => {
        e.preventDefault()

        if (valor.trim().length == 0) {
            alert("Preenchaer o genero")
            return false
        }

        const objetocadastro = {
            idGenero: crypto.randomUUID(),
            nome: valor
        }


        try {
            const retornoAPI = await api.post("/Genero", objetocadastro)
            alert("Cadastrado com sucesso")

            getGeneros()

            limparFormulario()

            //limpar campos
        } catch (error) {
            alert("Erro ao cadastrar na API")
            console.log(error)
        }

        // alert("Função Cadastrar Genero em desevolvimento")
    }// Fim da func cadastrar genero



    const limparFormulario = () => {
        setValor("")
    }


   const excluirGenero = async (item) => {

   console.log(item)

    try {
      const retornoAPI = await api.delete(`/Genero/${item.IdGenero}`);
      alert("Gênero excluído com sucesso!");
      getGeneros();
    } catch (error) {
      alert("Ocorreu um erro ao excluir o gênero.");
      console.log(error);
    }
  };




    const editarGenero = () => {
        alert("função editar em desenvolvimento")
    }





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
                    funcCadastro={cadastrarGenero}
                    //Valor atual do campo de texto
                    valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}
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
                    funcEditar={editarGenero}
                />

            </main>
            <Footer />
        </>

    )
}

export default CadastroGenero