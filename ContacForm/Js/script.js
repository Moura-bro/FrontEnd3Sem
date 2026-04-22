function minhaFuncao() {

    let quantidadeErros = 0;

    let nome = document.getElementById("nome").value.trim();
    let Sobrenome = document.getElementById("Sobrenome").value.trim();
    // let email = document.getElementById("E-mail").value.trim();
    // let prefixo = document.getElementById("prefixo").value.trim();
    // let ddd = document.getElementById("ddd").value.trim();
    // let numero = document.getElementById("numero").value.trim();
    // let cep = document.getElementById("cep").value.trim();
    // let ruaC = document.getElementById("ruaC").value.trim();
    // let numeroendereco = document.getElementById("numeroendereco").value.trim();
    // let ape = document.getElementById("ape").value.trim();
    // let bairro = document.getElementById("bairro").value.trim();
    // let cidade = document.getElementById("cidade").value.trim();
    // let estado = document.getElementById("estado").value.trim();
    // let Anotacoes = document.getElementById("Anotacoes").value.trim();

    if (nome.length == 0) { formError("nome"); quantidadeErros++; } else { reiniciaBorda("nome"); }

    if (Sobrenome.length == 0) { formError("Sobrenome"); quantidadeErros++; } else { reiniciaBorda("Sobrenome"); }

    // if (email.length == 0) { formError("E-mail"); quantidadeErros++; } else { reiniciaBorda("E-mail"); }

    // if (prefixo.length == 0) { formError("prefixo"); quantidadeErros++; } else { reiniciaBorda("prefixo"); }

    // if (ddd.length == 0) { formError("ddd"); quantidadeErros++; } else { reiniciaBorda("ddd"); }

    // if (numero.length == 0) { formError("numero"); quantidadeErros++; } else { reiniciaBorda("numero"); }

    // if (cep.length == 0) { formError("cep"); quantidadeErros++; } else { reiniciaBorda("cep"); }

    // if (ruaC.length == 0) { formError("ruaC"); quantidadeErros++; } else { reiniciaBorda("ruaC"); }

    // if (numeroendereco.length == 0) { formError("numeroendereco"); quantidadeErros++; } else { reiniciaBorda("numeroendereco"); }

    // if (ape.length == 0) { formError("ape"); quantidadeErros++; } else { reiniciaBorda("ape"); }

    // if (bairro.length == 0) { formError("bairro"); quantidadeErros++; } else { reiniciaBorda("bairro"); }

    // if (cidade.length == 0) { formError("cidade"); quantidadeErros++; } else { reiniciaBorda("cidade"); }

    // if (estado.length == 0) { formError("estado"); quantidadeErros++; } else { reiniciaBorda("estado"); }

    // if (Anotacoes.length == 0) { formError("Anotacoes"); quantidadeErros++; } else { reiniciaBorda("Anotacoes"); }

    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " campo(s) obrigatório(s) não preenchido(s).");
    }





    let objetoContato = {
        nome: nome,
        Sobrenome: Sobrenome
    };
    let cadastrado = cadastrarContato(objetoContato);
    return false;


    async function cadastrarContato(objetoContato) {
        console.log(objetoContato);

        //Cadastrar na API
        let resposta = await fetch("http://localhost:3000/contatos",{
            method:"POST",
            body: JSON.stringify(objetoContato),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });


    }//Fim da cadastrar


}//fim

function formError(fildId) {
    document.getElementById(fildId).style.border = "1px solid red";
}

function reiniciaBorda(fildId) {
    document.getElementById(fildId).style.border = "none";
}

async function buscarEndereco(cep) {
    if (cep.trim().length < 8) {
        alert("CEP invalido. O CEP deve conter 8 digitos");
        return false;
    }
    try {
        let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        let dados = await retorno.json();
        // console.log(dados);


        aguardandoCampos()

        document.getElementById("cidade").value = dados.cidade;
        document.getElementById("ruaC").value = dados.ruaC;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.cidade;
        document.getElementById("estado").value = dados.estado;

    } catch {
        alert("Erro ao buscar o endereco!")
    }

    function aguardandoCampos() {
        document.getElementById("endereco").vaule = "Aguardando...";
        document.getElementById("bairro").vaule = "Aguardando...";
        document.getElementById("cidade").vaule = "Aguardando...";
        document.getElementById("estado").vaule = "Aguardando...";
    }

}