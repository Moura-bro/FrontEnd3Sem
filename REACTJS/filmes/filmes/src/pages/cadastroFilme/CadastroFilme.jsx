import Header from "../../components/header/Header";
import "./CadastroFilme.css";
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import { Alerta } from "../../components/Alerta/alerta";
import { useEffect, useState } from "react";
import Lista from "../../components/lista/Lista";
import api from "../../services/services";

const CadastroFilme = () => {

  // States e Variaves
  const [valor, setValor] = useState("")
  const [editar, setEditar] = useState(false)
  const [Id, setId] = useState()
  const [listaFilmes, setListaFilmes] = useState([])
  const [listaGeneros, setListaGeneros] = useState([])
  const [generoSelecionado, setGeneroSelecionado] = useState("")


  //Get
  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/Genero")

      setListaGeneros(retornoAPI.data)
    } catch (error) {
      alert("Problemas ao carregar os dados da API")
    }
  }



  //------------

  const getFilmes = async () => {
    try {
      const retornoAPI = await api.get("/Filme")

      setListaFilmes(retornoAPI.data)
    } catch (error) {
      alert("Problemas ao carregar os dados da API")
    }
  }


  //Ciclo de vida
  useEffect(() => {
    getGeneros()
    getFilmes()
  }, [])



  //Post------------------------
  const cadastrarFilme = async (e) => {
    e.preventDefault()


    if (valor.trim().length == 0) {
      // alert("Preenchaer o genero")
      Alerta({
        title: 'Cadastro de Filme!',
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



    //Formdata
    const formData = new FormData();

    formData.append("titulo", valor);
    formData.append("idGenero", generoSelecionado);
    formData.append("imagem", "default.jpg");


    // const objetocadastro = {
    //   titulo: valor,
    //   idGenero: generoSelecionado,
    //   imagem: "default.jpg"
    // }


    try {
      const retornoAPI = await api.post("/Filme", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      Alerta({
        title: 'Cadastro de Filme!',
        text: `${valor} Cadastraso com Sucesso`,
        icon: 'success',
        confirmButtonText: 'OK'
      })

      getFilmes()

      limparFormulario()

      //limpar campos
    } catch (error) {
      // alert("Erro ao cadastrar na API")
      console.log(error.response)
      console.log(error.response.data)
      Alerta({
        title: 'Cadastro de Filme!',
        text: 'Erro ao cadastrar na API',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      console.log(error)
    }

    // alert("Função Cadastrar Genero em desevolvimento")
  }// Fim da func cadastrar genero




  //Put-------------------------

  const preEditar = (item) => {
    console.log(item);

    setEditar(true)
    setValor(item.titulo)
    setId(item.idFilme)
    setGeneroSelecionado(item.idGenero)
  }



  const editarFilme = async (e, item) => {


    e.preventDefault();

    //validar o formulario
    if (valor.trim().length == 0) {
      // alert("Preencha os campos corretamente");
      Alerta({
        title: 'Editar Filme!',
        text: 'Preencha os campos corretamente',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return false;
    }

     //Formdata
    const formData = new FormData();

    formData.append("titulo", valor);
    formData.append("idGenero", generoSelecionado);
    formData.append("imagem", "default.jpg");

    try {
      const retornoAPI = await api.put(`/Filme/${Id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      // alert("Genero editado com sucesso");
      Alerta({
        title: 'Editar Filme!',
        text: 'Genero editado com sucesso',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      getFilmes();
      limparFormulario();
    } catch (error) {
      console.log(error);
      // alert("Ocorreu algum erro ao editar, tente novamente mais tarde");
      Alerta({
        title: 'Editar Filme!',
        text: 'Ocorreu algum erro ao editar, tente novamente mais tarde',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }//Fim da Funcao editar

  //Delete----------------------
  const excluirFilme = async (item) => {

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

    if (!result.isConfirmed) {
      return false
    }



    try {

      const retornoAPI = await api.delete(`/Filme/${item.idFilme}`)
      if (retornoAPI.status == 200 || retornoAPI.status == 204) {
        // alert("Gênero excluído com sucesso!")
        Alerta({
          title: 'Excluir Genero',
          text: `${valor} Excluido com Sucesso`,
          icon: 'success',
          confirmButtonText: 'OK'
        })

        getFilmes()
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
  }// fim fa Função Excluir


  //----------------------------
  const limparFormulario = () => {
    setValor("");
    setGeneroSelecionado("");
    setEditar(false);
    setId(null);
  }

  //Funcoes






  return (
    <>
      <Header />
      <main>
        <Cadastro
          //Define o título que será exibido no formulário
          tituloCadastro="Cadastro um Filme"
          // esconde o select de genero
          // visibilidade="none"
          // Define o texto que aparece dentro do campo de input
          placeholder="filme"
          // ----------------------------------------------------
          // Propriedades voltada ao cadastro:

          //Função que será chamada ao enviar o formulário (onSubmit)
          funcCadastro={editar ? editarFilme : cadastrarFilme}
          //Valor atual do campo de texto
          valor={valor}
          //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
          setValor={setValor}
          btnEditar={editar}
          cancelarEdicao={limparFormulario}
          listaGeneros={listaGeneros}
          generoSelecionado={generoSelecionado}
          setGeneroSelecionado={setGeneroSelecionado}
        />

        {/*Lista de Filmes*/}
        <Lista
          tituloLista="Lista de Filmes"
          // visibilidade="none"

          //Chama o método para validar:
          lista={listaFilmes}
          listaGeneros={listaGeneros}

          //Identifica o tipo de lista:
          tipoLista="filme"


          funcExcluir={excluirFilme}
          funcEditar={preEditar}
        />

      </main>
      <Footer />
    </>
  );
};

export default CadastroFilme;
