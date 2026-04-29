//Criar um array com 10 numeros 
//rodar o map multiplicando o valor de cada item por 2 
//exibir no final o array

const numeros = [1 , 2 , 3 , 4, 5 , 6 , 7 , 8 , 9 , 10];


const Dobro = numeros.map((n) => {
    return n * 2;
});

console.log(Dobro);