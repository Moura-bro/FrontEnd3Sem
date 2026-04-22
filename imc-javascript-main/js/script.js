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
    
}//fim da funcao calcular


    //caucular o imc 

    function calcularImc(altura, peso){
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


