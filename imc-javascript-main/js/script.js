function calcular() {
    //pegar os valores dos campos nome,altura e peso
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    //validacao se preencheu todos os campos 
    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Preemcha todos os campos: Nome, altura e peso")
        return false;
    }


    const IMC = calcularImc(altura, peso);
    const textoSituacao = gararTextoIMC(IMC);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(IMC);
    console.log(textoSituacao);

    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        IMC: IMC,
        textoSituacao: textoSituacao
    }
    const retorno = cadastrarIMC(objIMC);

    if (retorno) {
        const tabela = document.getElementById("cadastro");

        tabela.innerHTML += `  <td>${nome}</td>
                            <td>${altura}</td>
                            <td>${peso}</td>
                            <td>${IMC.toFixed(2)}</td>
                            <td>${textoSituacao}</td>`


        //linpar os campos do formulario
        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        alert(`${nome} foi cadastrado no banco
               Nome: ${nome}
               IMC:  ${IMC}
               Situação: ${textoSituacao}`);

    }

}//fim da funcao calcular

async function cadastrarIMC(objIMC) {

    try {
        let resposta = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objIMC),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }

}






//caucular o imc 

function calcularImc(altura, peso) {
    return peso / (altura * altura);
}

// Menor que 16 – Magreza grave;

// 16 a menor que 17 – Magreza moderada;

// 17 a menor que 18,5 – Magreza leve;

// 18,5 a menor que 25 – Saudável;

// 25 a menor que 30 – Sobrepeso;

// 30 a menor que 35 – Obesidade Grau I;

// 35 a menor que 40 – Obesidade Grau II (considerada severa);

// Maior que 40 – c (considerada mórbida).

function gararTextoIMC(IMC) {
    if (IMC < 16) {
        return "Magreza grave";
    } else if (IMC < 17) {
        return "Magreza moderada";
    } else if (IMC < 18.5) {
        return "Magreza leve";
    } else if (IMC < 25) {
        return "Saudável";
    } else if (IMC < 30) {
        return "Sobrepeso";
    } else if (IMC < 35) {
        return "Obesidade Grau I";
    } else if (IMC < 40) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}

async function buscarIMCs() {
    try {
        const retorno = await fetch("http://localhost:3000/imc");
        const dadosRetornados = await retorno.json();

        console.log(dadosRetornados);

        const tabela = document.getElementById("cadastro");
        let template = "";

        for (let i = 0; i < dadosRetornados.length; i++) {

            template += `<tr>  
                            <td>${dadosRetornados[i].nome}</td>
                            <td>${dadosRetornados[i].altura}</td>
                            <td>${dadosRetornados[i].peso}</td>
                            <td>${dadosRetornados[i].IMC.toFixed(2)}</td>
                            <td>${dadosRetornados[i].textoSituacao}</td>
                            </tr>`
        }

        tabela.innerHTML = template;
    } catch (error) {
        console.log(error);

    }
}


