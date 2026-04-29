function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }


    //processamento
    if (op == 'soma') {
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if (op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao') {
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao') {

        if (n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }

    } else {
        resultado = "Operação Inválida";
    }


    console.log(n1);
    console.log(n2);
    console.log(op);
    console.log(resultado);

    const objCalcular = {
        n1: n1,
        n2: n2,
        op: op,
        resultado: resultado

    }

    const retorno = cadastroAPI(objCalcular);
    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;

    if (retorno) {
        buscarIMCs();
        const card = document.getElementById("cadastro");

        card.innerHTML += ` 
    <article class="data__card-result">
            <span><strong>Primeiro Número:</strong>${n1}</span>
            <span><strong>Segundo Número:</strong>${n2}</span>
            <span><strong>Operação:</strong>${op}</span>
            <span><strong>Resultado:</strong>${resultado}</span>
        </article>`
    }
}//Fin da Funcao calcular 



//Funcao cadastro, Ela cadstra as informacoes na API
async function cadastroAPI(objCalcular) {
    try {
        let resposta = await fetch("http://localhost:3000/Calculos", {
            method: "POST",
            body: JSON.stringify(objCalcular),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        return true;

    } catch (error) {

        console.log(error);
        return false;

    }

}//fim da funcao cadastroAPI





/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if (valor2 == 0) {
        return 'Não é um número';
    }

    return valor1 / valor2;
}

//----------------------------------------------------------------------
async function buscarIMCs() {
    try {
        const retorno = await fetch("http://localhost:3000/Calculos");
        const dadosRetornados = await retorno.json();


        //Ordena os cards pelo seu resultado, (n1 e n2 sao objetos)
        dadosRetornados.sort((a, b) => parseFloat(a.resultado) - parseFloat(b.resultado));

        console.log(dadosRetornados);

        const card = document.getElementById("cadastro");
        let template = "";

        for (let i = 0; i < dadosRetornados.length; i++) {

            template += ` 
            <article class="data__card-result">
            <span><strong>Primeiro Número:</strong>${dadosRetornados[i].n1}</span>
            <span><strong>Segundo Número:</strong>${dadosRetornados[i].n2}</span>
            <span><strong>Operação:</strong>${dadosRetornados[i].op}</span>
            <span><strong>Resultado:</strong>${dadosRetornados[i].resultado}</span>
            </article> `
        }

        card.innerHTML = template;
    } catch (error) {
        console.log(error);

    }
}



