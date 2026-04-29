//utilizando para filtar um elemento dentro e um array. Retorna apenas o encontrado


const numeros = [5 , 10 ,14];

const encontrado = numeros.filter((n) => {
    return n == 10
});

//console.log(encontrado);



const Estoque = [
   {
     descricao:"Camisa Polo",
     cor:"Preta",
     Perfil:"M",
     quantidade: 10
   },
   {
     descricao:"Camisa Polo",
     cor:"Azul",
     Perfil:"F",
     quantidade: 26
   },
   {
     descricao:"Camisa Polo",
     cor:"Branca",
     Perfil:"F",
     quantidade: 18
   },
   {
     descricao:"Camisa Polo",
     cor:"Verde",
     Perfil:"M",
     quantidade: 16
   },
];

const poloPerfilFemininas = Estoque.filter((Est) => {
    return Est.Perfil == "F";
});

console.log(poloPerfilFemininas);

console.log();

poloPerfilFemininas.forEach((FM) => {
    console.log(`${FM.cor}:${FM.quantidade} unidade(S)`);
})


